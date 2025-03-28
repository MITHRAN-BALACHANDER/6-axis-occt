import { useEffect, useState } from "react";
import "../App.css";
import shapeToUrl from "../shapeToUrl";
import initOpenCascade from "opencascade.js";
import "@google/model-viewer";
import Start from "../Start";
import Stop from "../Stop";
import Header from "../header";
import Simulate from "../Simulate";
import XYZSliders from "../Sliders";
import Navbar from "../navbar/navbar";
import { LoaderCircle } from "lucide-react";
const Home = () => { 
  const [modelUrl, setModelUrl] = useState(null);

  useEffect(() => {
    shapeToUrl("6-axis.glb")
      .then((glbUrl) => initOpenCascade().then((oc) => ({ oc, glbUrl })))
      .then(({ oc, glbUrl }) => {
        const sphere = new oc.BRepPrimAPI_MakeSphere_1(1);

        const makeCut = (shape, translation, scale) => {
          const tf = new oc.gp_Trsf_1();
          tf.SetTranslation_1(new oc.gp_Vec_4(...translation));
          tf.SetScaleFactor(scale);
          const loc = new oc.TopLoc_Location_2(tf);

          const cut = new oc.BRepAlgoAPI_Cut_3(
            shape,
            sphere.Shape().Moved(loc, false),
            new oc.Message_ProgressRange_1()
          );
          cut.Build(new oc.Message_ProgressRange_1());
          return cut.Shape();
        };

        let shape = sphere.Shape();
        shape = makeCut(shape, [0, 0, 0.7], 1);
        shape = makeCut(shape, [0, 0, -0.7], 1);
        shape = makeCut(shape, [0, 0.25, 1.75], 1.825);
        shape = makeCut(shape, [4.8, 0, 0], 5);

        return shapeToUrl("6-axis.glb");
      })
      .then(setModelUrl)
      .catch((error) => console.error("Error processing model:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="content" style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <div
            className="controls"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              className="start-container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Start />
              <Stop />
              <Simulate />
            </div>

            <div>
              <XYZSliders />
            </div>
          </div>

          {modelUrl ? (
            <model-viewer
              className="App-viewport"
              style={{ width: "40%", height: "80vh", maxWidth: "1200px", marginLeft: "2rem" }}
              src={modelUrl}
              camera-controls
              auto-rotate
              ar
            />
          ) : (
            <div className="loading">
              <div className="animat">
              <LoaderCircle/>
                </div>
            </div>
          )}
        </div>
     </header>
    </div>
  );
};

export default Home;  // ✅ Capitalized export

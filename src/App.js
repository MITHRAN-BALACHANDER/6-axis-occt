import { useEffect, useState } from "react";
import "./App.css";
import shapeToUrl from "./shapeToUrl";
import initOpenCascade from "opencascade.js";
import "@google/model-viewer";
import Start from "./Start";
import Stop from "./Stop";
import logo from "./logo.jpg"; 

function App() {
  const [modelUrl, setModelUrl] = useState(null);

  useEffect(() => {
    shapeToUrl("6-axis.glb")
      .then((glbUrl) => {
     
        return initOpenCascade().then((oc) => ({ oc, glbUrl }));
      })
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

      <img src={logo} alt="Logo" className="logo"/>

      <div className="content">
        <div className="start-container">
          <Start />

          <Stop/>
        </div>

        {modelUrl ? (
         <model-viewer
  className="App-viewport"
  style={{ width: "100vw", height: "80vh", maxWidth: "1200px", margin: "auto", display: "block" }}
  src={modelUrl}
  camera-controls
  auto-rotate
  ar
/>
        ) : (
          <p>Loading...</p>
        )}  
      </div>
    </header>
  </div>
  );
}

export default App;

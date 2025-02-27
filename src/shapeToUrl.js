export default function shapeToUrl(fileName) {
  const filePath = `/${fileName}`;

  return new Promise((resolve, reject) => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load GLB file: ${filePath}`);
        }
        return response.blob();
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        resolve(url);
      })
      .catch(error => reject(error));
  });
}

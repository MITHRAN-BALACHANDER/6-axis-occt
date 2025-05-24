# Project Title: 3D Model Viewer and Simulator

This project is a web-based 3D model viewer and simulator, with potential applications in robotics, CAD, and other fields requiring 3D visualization. It leverages the power of React for the user interface, OpenCascade.js for robust CAD model handling, and Google Model Viewer for seamless 3D rendering in the browser.

---

## Features

The application currently includes the following features:

- **3D Model Viewing:** Utilizes `@google/model-viewer` to display 3D models (e.g., GLB files).
- **Basic 3D Model Manipulation:** Demonstrates creating and modifying 3D geometry using `opencascade.js` (e.g., the sphere with cuts example in `Home.js`).
- **Interactive Controls:** Includes UI elements for:
    - "Start," "Stop," and "Simulate" actions (further development planned).
    - XYZ sliders for potentially manipulating model position or other parameters.
- **Component-Based Architecture:** Built with React, featuring a modular structure with components for different functionalities (Home, Graph, Settings).
- **Routing:** Uses `react-router-dom` for navigation between different views/pages of the application.
- **Loading Indication:** Displays a loading animation while the 3D model is being processed and loaded.

---

## Project Structure

The project is organized as follows:

- **`public/`**: Contains static assets served directly by the web server.
    - `index.html`: The main HTML file, the entry point for the React application.
    - Also contains static assets like 3D models (.glb, .step) and images.
- **`src/`**: Contains the core React application code, including components, logic, and styling.
    - `App.js`: The main application component, typically handling routing and overall application layout.
    - `home/Home.js`: The component for the main page, where the 3D model viewer and controls are displayed.
    - `Graph/Graph.js`: A basic component intended for displaying graphs or data visualizations.
    - `Setting/settings.js`: A basic component intended for user-configurable settings.

---

## Future Development

Potential future enhancements for this project include:

- **Implement Graphing Functionality:** Develop the `Graph.js` component to visualize data related to simulations or model properties.
- **Develop Settings Page:** Complete the `settings.js` component to allow users to customize application behavior or viewer options.
- **Advanced Simulations:** Enhance simulation capabilities beyond the current basic example.
- **Expanded File Format Support:** Add support for more 3D model file formats (e.g., STEP, IGES), leveraging OpenCascade.js for conversion if needed.
- **User Authentication:** Fully implement login/logout functionality (placeholder UI exists).
- **Improved UI/UX:** Continuously refine the user interface and overall user experience.
- **Backend Integration:** Consider adding a backend to save user data, manage projects, or perform more complex computations.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run clean`

Removes the `build` directory. This is useful for clearing out old build artifacts before creating a new production build.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

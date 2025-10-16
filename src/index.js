/**
 * Main Entry Point for the Application
 * 
 * This file serves as the entry point for the application. It imports necessary libraries, 
 * CSS files, and components, and renders the React app to the DOM. It also wraps the app 
 * in the `DarkModeProvider` to manage dark mode functionality across the application.
 * 
 * @fileoverview Main entry point for the React app, integrating routing, dark mode, and leaflet.
 * @author Md Golam Fardin
 */

// Import the React library, which is used to build UI components
import React from "react";

// Import the ReactDOM library, which is used to render React components into the DOM (the HTML structure)
import ReactDOM from "react-dom/client";

// Import the CSS file for styling the application
import "./index.css";

// Import the `MyPages` component from the `MyPages.js` file, which contains the app's route setup
import MyPages from "./MyPages";

// Import the `DarkModeProvider` from the DarkModeContext file to manage the dark mode state globally
import { DarkModeProvider } from "./DarkModeContext";

// Import the Leaflet CSS for map styling (necessary for Leaflet maps)
import "leaflet/dist/leaflet.css";

// Get a reference to the HTML element with the ID 'root'
// This is where the React app will be rendered in the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the `MyPages` component into the 'root' element
// `React.StrictMode` is a wrapper that helps highlight potential problems in the app during development
root.render(
  <React.StrictMode>
    {/* Wrap the entire application in the DarkModeProvider to enable dark mode functionality */}
    <DarkModeProvider>
      {/* Render the main app page and route setup inside MyPages component */}
      <MyPages />
    </DarkModeProvider>
  </React.StrictMode>
);

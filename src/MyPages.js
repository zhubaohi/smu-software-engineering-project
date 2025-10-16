/**
 * React Routing Configuration
 * 
 * This component sets up all the routing for the application using `react-router-dom`.
 * It defines the main routes of the app, including sub-routes for different pages.
 * 
 * @fileoverview This file handles the setup of routes using React Router.
 * @author Md Golam Fardin
 */

// Import necessary modules and components from the "react-router-dom" library
// `BrowserRouter` provides the routing context for the application
// `Routes` is a container for all the route definitions
// `Route` defines individual routes for the app
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom components/pages that will be displayed for each route
import Layout from "./pages/Layout";
import About from "./pages/About";
import Ecosystem from "./pages/Ecosystem";
import Gallery from "./pages/Gallery";
import SiteMap from "./pages/SiteMap";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

// Define and export the main component for the app, which sets up routing
export default function MyPages() {
  return (
    // Use `BrowserRouter` to enable routing in the app
    <BrowserRouter>
      {/* Define all the available routes inside the `Routes` component */}
      <Routes>
        {/* Main route for the application, with `Layout` as the parent component */}
        <Route path="/" element={<Layout />}>
          {/* Sub-route for the homepage (`index` represents the default path `/`) */}
          <Route index element={<Home />} />
          {/* Route for the `/about` path, displaying the `About` component */}
          <Route path="about" element={<About />} />
          {/* Route for the `/gallery` path, displaying the `Gallery` component */}
          <Route path="gallery" element={<Gallery />} />
          {/* Route for the `/ecosystem` path, displaying the `Ecosystem` component */}
          <Route path="ecosystem" element={<Ecosystem />} />
          {/* Route for the `/sitemap` path, displaying the `SiteMap` component */}
          <Route path="sitemap" element={<SiteMap />} />
          {/* Route for the `/contact` path, displaying the `Contact` component */}
          <Route path="contact" element={<Contact />} />
          {/* Catch-all route (`*`) for undefined paths, displaying the `NoPage` component */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
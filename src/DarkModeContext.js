/**
 * Dark Mode Context for Managing Application Theme
 * 
 * This file defines a context and provider to manage the dark mode state for the application.
 * The `DarkModeProvider` wraps the app and provides access to dark mode toggle functionality.
 * 
 * @fileoverview Context and provider for dark mode management in the application.
 * @author Md Golam Fardin
 */

import React, { createContext, useState } from "react";

// Create the context to manage dark mode
export const DarkModeContext = createContext();

// Create a provider component for managing dark mode state
export const DarkModeProvider = ({ children }) => {
  // State to track whether dark mode is enabled
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode on or off
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle between true and false
  };

  return (
    // Provide the darkMode state and toggle function to child components
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children} {/* Render children components wrapped by the provider */}
    </DarkModeContext.Provider>
  );
};
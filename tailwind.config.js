/**
 * TailwindCSS Configuration File
 * 
 * This file configures the TailwindCSS framework for the project.
 * It defines custom colors, fonts, and paths for scanning content to apply TailwindCSS classes.
 * 
 * @fileoverview TailwindCSS configuration with custom theme extensions.
 * @author Md Golam Fardin
 * @author Mariam Nasir (A00460192)
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify where Tailwind should look for class usage
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Extend the default TailwindCSS theme
  theme: {
    extend: {
      // Custom colors for the project
      colors: {
        navbarBg: '#0A3981', // Navbar background color
        headingClr: '#0A3981', // Heading text color
        navClr: '#0A3981', // Navigation text color
        titleClr: "#ffe0c7", // Title text color
        subClr: "#393E46", // Subtitle text color
        bgClr: "#eaf3f7" // Background color
      },

      // Custom fonts for the project
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'], // Add 'Nunito' as a font family option
      },
    },
  },

  // Add any required plugins (none are used in this configuration)
  plugins: [],
};
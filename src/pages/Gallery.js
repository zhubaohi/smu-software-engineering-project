/**
 * Gallery Component
 * 
 * This component renders the gallery page for the application. It displays a heading and a list 
 * of images uploaded by users, along with the option to upload more images. The gallery page 
 * dynamically adjusts its appearance based on the dark mode state, which is managed by the 
 * DarkModeContext.
 * 
 * @fileoverview Gallery page component that displays images and an upload section, 
 * with styling adjustments for dark mode.
 * @author Md Golam Fardin
 */

// Import the ImgUpload and Images subcomponents for displaying and uploading images
import ImgUpload from "./subcomponents/ImgUpload";
import Images from "./subcomponents/Images";

// Import the useContext hook to access the dark mode state
import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

// Define the Gallery component as a functional component
const Gallery = () => {
  // Access the darkMode state from the DarkModeContext
  const { darkMode } = useContext(DarkModeContext);

  return (
    // Wrapper div with responsive classes, adjusts based on dark mode
    <div className="flex flex-col items-center text-center px-4 sm:px-8 md:px-12 lg:px-28 2xl:px-40">
      {/* Gallery Heading */}
      <h1
        className={`text-4xl lg:text-5xl font-bold pt-14 mb-10 no-shadow ${
          darkMode ? "text-white" : "text-[#103c84]"
        }`}
      >
        Gallery
      </h1>
      {/* Subheading */}
      <h2
        className={`text-xl lg:text-2xl mb-5 font-bold no-shadow ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Take a look at the stunning photos taken right here.
      </h2>

      {/* Images Section */}
      <div className="w-full">
        {/* Display Images using the Images component */}
        <Images />
      </div>

      {/* Upload Section */}
      <div className="w-full mt-8">
        {/* Provide an option for users to upload images */}
        <ImgUpload />
      </div>
    </div>
  );
};

// Export the Gallery component so it can be used in other parts of the app
export default Gallery;
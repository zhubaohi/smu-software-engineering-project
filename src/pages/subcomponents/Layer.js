/**
 * Layer Component
 * 
 * This component displays a list of image cards with an option to toggle between showing a limited number of images or showing all images.
 * The images are passed as props, and each image card is rendered using the `ImageCard` component.
 * The component also integrates dark mode by changing the styles based on the `darkMode` context.
 * 
 * Author: Md Golam Fardin
 * 
 * @param {Object} props - Properties passed to the component.
 * @param {string} props.heading - The heading of the section.
 * @param {Array} props.data - Array containing the image data to display.
 * 
 * @returns {JSX.Element} The rendered Layer component.
 */

import React, { useState, useContext } from "react";
import ImageCard from "./ImageCard";
import { motion } from "framer-motion";
import { DarkModeContext } from "../../DarkModeContext"; // Access dark mode context

/**
 * Function to create an ImageCard component for each image data.
 * 
 * @param {Object} imgInfo - Image information such as URL, title, description, and audio URL.
 * @returns {JSX.Element} The ImageCard component for the image.
 */
function createImageCard(imgInfo) {
  return (
    <ImageCard
      key={imgInfo.id} // Ensure each ImageCard has a unique key
      url={imgInfo.url}
      aud={imgInfo.aud}
      title={imgInfo.title}
      description={imgInfo.description}
    />
  );
}

function Layer(props) {
  const [showMore, setShowMore] = useState(false); // State for toggling the "Show More" functionality
  const { darkMode } = useContext(DarkModeContext); // Access the dark mode context

  // Function to handle the toggling of the "Show More" button
  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  // Limit the number of items displayed based on whether "Show More" is toggled
  const visibleData = showMore ? props.data : props.data.slice(0, 9); // Show up to 9 images by default
  var baseHeight = 240; // Base height for the container when showing limited images

  return (
    <div className="mb-12">
      {/* Section heading */}
      <h2
        className={`text-left text-3xl lg:text-4xl font-bold mb-2 pl-4 ${
          darkMode ? "text-gray-200" : "text-subClr"
        }`}
      >
        {props.heading} {/* Dynamic heading based on the passed prop */}
      </h2>

      {/* Motion container for image cards with animation */}
      <motion.div
        initial={{ height: baseHeight.toString() + "px" }} // Initial height of the container
        animate={{
          height: showMore ? "auto" : baseHeight.toString() + "px", // Adjust height based on whether more images are shown
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration and easing
        className="overflow-hidden"
      >
        {/* Grid layout for image cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-1 px-2 md:px-4 lg:px-6 2xl:grid-cols-5 py-2">
          {visibleData.map((imgInfo) => createImageCard(imgInfo))} {/* Mapping over the image data and creating image cards */}
        </div>
      </motion.div>

      {/* Button to toggle between "Show More" and "Show Less" */}
      <button
        onClick={toggleShowMore}
        className={`shadow-sm font-bold mt-6 mb-4 text-lg px-4 py-2 rounded-full 
    ${
      darkMode
        ? "bg-gray-700 text-white hover:bg-gray-600 "
        : "bg-white text-blue-900 hover:bg-gray-200 "
    }
    lg:mt-8 lg:mb-6 lg:px-4 lg:py-2 xl:mt-8 xl:mb-6 xl:px-4 xl:py-2`}
      >
        {showMore ? "Show Less" : "Show More"} {/* Toggle button text */}
      </button>
    </div>
  );
}

export default Layer;
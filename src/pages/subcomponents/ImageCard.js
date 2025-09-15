/**
 * ImageCard Component
 * 
 * This component displays an image card that, when clicked, opens a modal to display a larger version
 * of the image along with the title, description, and an audio player. The modal can be closed by clicking
 * anywhere outside of it or using the close button. The component also includes a smooth transition animation
 * for both opening and closing the modal.
 * 
 * Author: Md Golam Fardin
 */

import React, { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";

function ImageCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling the modal visibility

  // Handles the image click event to open the modal
  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  // Handles the closing of the modal
  const handleCloseModal = () => {
    console.log(props.url); // Log the image URL to the console (for debugging)
    setIsModalOpen(false); // Close the modal
  };

  // Handles disabling the page scroll when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Prevent page scroll when modal is open
    } else {
      document.body.style.overflow = "auto"; // Restore page scroll when modal is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up on component unmount
    };
  }, [isModalOpen]);

  return (
    <div className="relative flex-row space-y-4 bg-white rounded-xl my-2">
      {/* Main Image Container */}
      <div
        className="custom-scale relative group h-52 overflow-hidden rounded-xl transition-transform duration-300 hover:cursor-pointer hover:shadow-md"
        onClick={handleImageClick}
      >
        <img
          className="w-full h-full object-cover object-center rounded-md"
          src={props.url}
          alt="img"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-white text-2xl font-bold mb-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
            {props.title}
          </h3>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed bottom-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-bgClr w-[95%] h-[98%] lg:w-[1100px] lg:h-[700px] rounded-2xl flex flex-col lg:flex-row items-stretch shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside it
          >
            {/* Left Black Section (Large Image) */}
            <div className="relative bg-black basis-4/5 lg:basis-2/3 rounded-2xl border-[1px] border-gray-300 flex items-center justify-center overflow-hidden">
              <button
                onClick={handleCloseModal}
                className="lg:hidden absolute right-2 top-2 text-5xl text-white opacity-60 hover:text-gray-300 transition-colors"
              >
                <IoIosCloseCircle />
              </button>
              <img
                className="big-img object-contain w-full h-full"
                src={props.url}
                alt="modal-img"
              />
            </div>

            {/* Right Section (Title, Description, Audio) */}
            <div className="bg-bgClr relative lg:basis-1/3 h-full rounded-b-2xl lg:rounded-r-2xl p-6 flex flex-col justify-start lg:justify-between overflow-y-auto">
              {/* Close Button in Desktop View */}
              <div className="hidden lg:flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 1 1-.708-.708L7.293 8z" />
                  </svg>
                </button>
              </div>

              {/* Mobile Title */}
              <div className="lg:hidden bg-bgClr max-h-[8%] py-2 flex justify-center items-center text-center">
                <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
                  {props.title}
                </h2>
              </div>

              {/* Title and Description */}
              <div className="bg-white my-5 rounded-xl py-8 px-6 flex flex-col items-center text-center shadow-md">
                <h2 className="hidden lg:flex text-3xl font-bold text-gray-800 tracking-wide">
                  {props.title}
                </h2>
                <p className="lg:mt-6 text-gray-600 text-lg leading-relaxed">
                  {props.description}
                </p>
              </div>

              {/* Audio Player */}
              <div className="fixed lg:relative bottom-4 lg:bottom-1 w-full left-0 px-4 lg:px-0">
                <audio
                  src={props.aud}
                  className="w-full rounded-full bg-gray-200 shadow-md"
                  controls
                ></audio>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageCard;
import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Images Component
 *
 * Fetches and displays all images from the uploads directory.
 * If an image fails to load, it skips the image and logs the URL to the console.
 * Displays images in a grid with uniform size, and shows the full image on click.
 *
 * @returns {JSX.Element} The rendered component.
 * @author Md Golam Fardin
 */

const Images = () => {
  const [images, setImages] = useState([]); // State to store image URLs
  const [error, setError] = useState(null); // State to handle errors
  const [validImages, setValidImages] = useState([]); // State for successfully loaded images
  const [modalImage, setModalImage] = useState(null); // State for the image to display in modal

  // Fetch image URLs from the server
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/images");
        setImages(response.data); // Assume response.data contains the array of image URLs
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to load images.");
      }
    };

    fetchImages();
  }, []);

  // Filter out invalid images dynamically
  const handleImageError = (imageUrl) => {
    console.error(`Failed to load image: ${imageUrl}`);
    setValidImages((prevValidImages) =>
      prevValidImages.filter((img) => img !== imageUrl)
    );
  };

  // Populate validImages with initial image URLs
  useEffect(() => {
    if (images.length > 0) {
      setValidImages(images);
    }
  }, [images]);

  return (
    <div>
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-8">
        {error && <div className="col-span-full text-red-500">{error}</div>}
        {validImages.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-52 overflow-hidden cursor-pointer"
            onClick={() => setModalImage(image)} // Open modal on click
          >
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover object-center rounded-lg shadow-md"
              onError={() => handleImageError(image)} // Handle image load error
            />
          </div>
        ))}
        {!error && validImages.length === 0 && (
          <div className="col-span-full text-gray-500">
            No images available.
          </div>
        )}
      </div>

      {/* Modal for Full Image Display */}
      {modalImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    onClick={() => setModalImage(null)} // Close modal on click
  >
    <div className="relative max-h-[90%] max-w-[95%] lg:max-w-[60%] flex items-center justify-center overflow-hidden">
      <img
        src={modalImage}
        alt="Full-size view"
        className="max-h-full max-w-full object-contain rounded-lg"
      />
      <button
        onClick={() => setModalImage(null)}
        className="absolute top-2 right-2 text-white text-2xl font-bold"
      >
        &times;
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default Images;

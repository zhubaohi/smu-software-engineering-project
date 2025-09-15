/* 
  Author: Kelly Prince Rwanyange
  Group: Assorted Donuts
  
  Purpose:
  This React component allows users to upload an image file along with metadata 
  such as the photographer's name, email, and a description. 
  The uploaded file and metadata are sent to a server endpoint for storage.
*/

import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import axios from "axios";
import { DarkModeContext } from "../../DarkModeContext";

/**
 * ImgUpload Component
 *
 * A functional React component that provides a user interface for image upload
 * and metadata entry.
 *
 * @returns {JSX.Element} The rendered component.
 */
export function ImgUpload() {
  const { darkMode } = useContext(DarkModeContext);
  // Local state for storing the selected file and metadata
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    photographer: "",
    email: "",
    description: "",
  });

  /**
   * Updates the selected file in the state.
   * @param {Event} event - Triggered when a file is selected.
   */
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Save the selected file
  };

  /**
   * Updates form data in the state based on user input.
   * @param {Event} e - Triggered when input fields change.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value })); // Update specific form field
  };

  /**
   * Handles the form submission to upload file and metadata to the server.
   */
  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload a file!"); // Alert user if no file is selected
      return;
    }

    // Create a FormData object to handle file and metadata
    const data = new FormData();
    data.append("file", file);
    data.append("photographer", formData.photographer);
    data.append("email", formData.email);
    data.append("description", formData.description);

    try {
      // Send a POST request to the server with file and metadata
      const response = await axios.post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("File uploaded successfully!"); // Notify user on success
      console.log(response.data); // Log server response
      window.location.reload();
    } catch (error) {
      console.error(error); // Log error for debugging
      alert("Error uploading file"); // Notify user of failure
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* File Input Section */}
      <Form.Label
        htmlFor="dropzone-file"
        className={`flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed ${
          darkMode
            ? "border-gray-600 bg-gray-700 hover:border-gray-500 hover:bg-gray-600"
            : "border-gray-300 bg-gray-50 hover:bg-gray-100"
        }`}
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          {/* Upload Icon */}
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </Form.Label>

      {/* File Preview and Metadata Form */}
      {file && (
        <div className="mt-4">
          {/* File Preview */}
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="mb-4 max-w-sm rounded-lg"
          />
          {/* Metadata Input Fields */}
          <Form.Group className="mb-3">
            <Form.Label>Photographer Name:</Form.Label>
            <Form.Control
              type="text"
              name="photographer"
              placeholder="Photographer's Name"
              value={formData.photographer}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Photographer's Email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="File description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default ImgUpload;

import React, { useState, useContext } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { DarkModeContext } from "../DarkModeContext"; // Access dark mode context

const Contact = () => {
  // Access `darkMode` from context for consistent dark mode
  const { darkMode } = useContext(DarkModeContext);

  // State for form data
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    country: "Canada", // Default value for country
    phone: "",
    message: "",
  });

  // State to display a message upon form submission
  const [showMessage, setShowMessage] = useState("");

  /**
   * Handle input changes in the form fields
   * Updates the corresponding field in `formData`
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Handle form submission
   * Sends data to the server and provides feedback on success or failure
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/formSubmit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowMessage("Form submitted successfully!");
        // Reset form data
        setFormData({
          fullName: "",
          lastName: "",
          email: "",
          country: "Canada",
          phone: "",
          message: "",
        });
      } else {
        setShowMessage("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      setShowMessage("An error occurred. Please try again.");
    }
  };

  /**
   * Play text-to-speech for accessibility
   * Reads an introductory message about the form
   */
  const playAudio = () => {
    const text =
      "This is the contact section. Please fill out the form to get in touch.";
    const speech = new SpeechSynthesisUtterance(text);
    speech.voice = speechSynthesis
      .getVoices()
      .find((voice) => voice.lang === "en-US" && voice.name.includes("Google"));
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;
    speechSynthesis.speak(speech);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-BgClr text-black"
      } flex-row items-center justify-center min-h-screen py-10`}
    >
      {/* Page Title */}
      <h1
        className={`text-4xl lg:text-5xl text-center font-bold mb-10 pt-4 ${
          darkMode ? "text-white shadow-none" : "text-[#103c84]"
        }`}
      >
        Contact Us
      </h1>

      {/* Contact Form Section */}
      <div className="flex flex-col items-center px-4">
        <div
          className={`w-full max-w-4xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-lg p-8`}
        >
          {/* Display submission status */}
          {showMessage && (
            <p className="text-center mb-4 text-lg font-bold">{showMessage}</p>
          )}
          <form
            className="relative grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            {/* Full Name Field */}
            <div>
              <label className="block text-lg font-medium mb-2">
                Full Name:
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={` w-full px-4 py-2 focus:border rounded-lg focus:outline-none  ${
                  darkMode
                    ? " bg-gray-500 text-white placeholder-gray-400"
                    : "focus:ring-2 border bg-white text-black"
                }`}
                placeholder="First Name"
                required
              />
            </div>

            {/* Last Name Field */}
            <div>
              <label className="block text-lg font-medium mb-2">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full focus:border px-4 py-2  rounded-lg focus:outline-none  ${
                  darkMode
                    ? "bg-gray-500 text-white placeholder-gray-400"
                    : "focus:ring-2 border bg-white text-black"
                }`}
                placeholder="Last Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-lg font-medium mb-2">
                Email ID:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 focus:border  py-2 rounded-lg focus:outline-none ${
                  darkMode
                    ? " bg-gray-500 text-white placeholder-gray-400"
                    : "focus:ring-2 border bg-white text-black"
                }`}
                placeholder="someone@gmail.com"
                required
              />
            </div>

            {/* Country Field */}
            <div>
              <label className="block text-lg font-medium mb-2">Country:</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full focus:border px-4 py-2 rounded-lg focus:outline-none ${
                  darkMode
                    ? " bg-gray-500 text-white placeholder-gray-400"
                    : " focus:ring-2 border bg-white text-black"
                }`}
              >
                <option value="Canada">Canada</option>
                <option value="United States">United States</option>
              </select>
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-lg font-medium mb-2">
                Phone Number:
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 focus:border rounded-lg focus:outline-none ${
                  darkMode
                    ? " bg-gray-500 text-white placeholder-gray-400"
                    : " focus:ring-2 border bg-white text-black"
                }`}
                placeholder="(xxx)-xxx-xxxx"
              />
            </div>

            {/* Message Field */}
            <div className="md:col-span-2">
              <label className="block text-lg font-medium mb-2">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 focus:border rounded-lg focus:outline-none ${
                  darkMode
                    ? " bg-gray-500 text-white placeholder-gray-400"
                    : "focus:ring-2 border bg-white text-black"
                }`}
                placeholder="Your thoughts..."
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className={`shadow-sm font-bold mt-2 mb-2 text-lg px-8 py-4 text-white rounded-lg ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "border bg-blue-900 hover:bg-blue-800"
                }`}
              >
                Send
              </button>
            </div>

            {/* Text-to-Speech Button */}
            <div className="absolute bottom-1 left-1">
              <button
                onClick={playAudio}
                className={`shadow-md text-3xl px-3 py-3 rounded-full transition-bg duration-300 ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-gray-100 text-blue-900 hover:bg-gray-200"
                }`}
              >
                <FaVolumeUp />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

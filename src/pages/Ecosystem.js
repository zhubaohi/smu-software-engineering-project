// Import the Subcomponent component from the specified folder
import React, { useState, useContext } from "react";
import FloraFaunaFungi from "./subcomponents/FloraFaunaFungi";
import { FaVolumeUp } from "react-icons/fa";
import { DarkModeContext } from "../DarkModeContext"; // Access dark mode context

// Define the Ecosystem component as a functional component
const Ecosystem = () => {
  // State for dark mode
  const { darkMode } = useContext(DarkModeContext);

  // Text-to-Speech function
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US"; // Set the language
    speech.rate = 1; // Set the speed of speech
    speech.pitch = 1; // Set the pitch
    window.speechSynthesis.speak(speech); // Speak the text
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 px-2 md:px-10 lg:px-20 2xl:28 ${
        darkMode ? "text-gray-200" : "text-gray-900"
      }`}
    >
      {/* Main Title Section */}
      <div className="text-center py-8">
        <h1
          className={`text-4xl lg:text-5xl  font-bold pt-6  mb-10 no-shadow ${
            darkMode ? "text-white" : "text-[#103c84]"
          }`}
        >
          Ecosystem
        </h1>
        <h2
          className={`text-xl lg:text-2xl mb-5  font-bold  no-shadow ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          A Living Testament to Nature and History
        </h2>
      </div>
      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {/* Left Content Block */}
        <div>
          <p className="text-lg mb-4" style={{ fontSize: "20px" }}>
            Saint Bay Area Woodland Conservation Site is a notable example of
            community-led environmental preservation in action. Nestled within
            the larger Bay Area, this site encompasses a significant expanse of
            native woodland, offering a critical habitat for local flora and
            fauna. The conservation efforts focus on protecting the indigenous
            plant species and wildlife, while also maintaining the natural
            landscapes that are vital for ecological balance.
          </p>
          {/* Speak Button */}
          <button
            onClick={() =>
              speak(
                "Saint Bay Area Woodland Conservation Site is a notable example of community-led environmental preservation in action. Nestled within the larger Bay Area, this site encompasses a significant expanse of native woodland, offering a critical habitat for local flora and fauna. The conservation efforts focus on protecting the indigenous plant species and wildlife, while also maintaining the natural landscapes that are vital for ecological balance."
              )
            }
            className={`text-2xl p-2 rounded-full mb-8 ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-white text-blue-900 hover:bg-gray-200"
            }`}
          >
            <FaVolumeUp />
          </button>

          <p className="text-lg mb-4" style={{ fontSize: "20px" }}>
            The site serves multiple purposes: it acts as a research area for
            scientists studying ecological restoration and conservation
            techniques, an educational resource for schools and community
            groups, and a recreational space for the public who can explore its
            trails and learn about local biodiversity. Volunteers play a key
            role in the ongoing maintenance and protection of the area,
            participating in regular clean-up days, planting native species, and
            monitoring wildlife activity.
          </p>

          {/* Speak Button */}
          <button
            onClick={() =>
              speak(
                "The site serves multiple purposes: it acts as a research area for scientists studying ecological restoration and conservation techniques, an educational resource for schools and community groups, and a recreational space for the public who can explore its trails and learn about local biodiversity. Volunteers play a key role in the ongoing maintenance and protection of the area, participating in regular clean-up days, planting native species, and monitoring wildlife activity."
              )
            }
            className={`text-2xl p-2 rounded-full mb-8 ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-white text-blue-900 hover:bg-gray-200"
            }`}
          >
            <FaVolumeUp />
          </button>

          <div className="relative">
            <img
              src="/imgforecosys/eco2.webp"
              alt="Woodland"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Content Block */}
        <div>
          <div className="relative mb-4">
            <img
              src="/imgforecosys/eco1.webp"
              alt="EcoSystem Detail"
              className="rounded-lg"
            />
          </div>
          <p className="text-lg mb-4" style={{ fontSize: "20px" }}>
            Conservation projects at the site often involve removing invasive
            plant species that threaten the native vegetation, restoring streams
            and wetlands that are crucial for the local water cycle, and
            creating barriers to prevent human encroachment into sensitive
            areas. Educational programs designed to engage the community focus
            on the importance of sustainable practices and the role each
            individual can play in preserving their local environment.
          </p>

          {/* Speak Button */}
          <button
            onClick={() =>
              speak(
                "Conservation projects at the site often involve removing invasive plant species that threaten the native vegetation, restoring streams and wetlands that are crucial for the local water cycle, and creating barriers to prevent human encroachment into sensitive areas. Educational programs designed to engage the community focus on the importance of sustainable practices and the role each individual can play in preserving their local environment."
              )
            }
            className={`text-2xl p-2 rounded-full mb-8 ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-white text-blue-900 hover:bg-gray-200"
            }`}
          >
            <FaVolumeUp />
          </button>

          <p className="text-lg mb-4" style={{ fontSize: "20px" }}>
            The Saint Bay Area Woodland Conservation Site exemplifies how
            dedicated stewardship and community involvement can effectively
            preserve and enhance vital natural resources for future generations,
            fostering a deep connection between people and the natural world
            around them.
          </p>
          {/* Speak Button */}
          <button
            onClick={() =>
              speak(
                "The Saint Bay Area Woodland Conservation Site exemplifies how dedicated stewardship and community involvement can effectively preserve and enhance vital natural resources for future generations, fostering a deep connection between people and the natural world around them."
              )
            }
            className={`text-2xl p-2 rounded-full mb-8 ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-white text-blue-900 hover:bg-gray-200"
            }`}
          >
            <FaVolumeUp />
          </button>
        </div>
      </div>
      {/* Species */}
      <div className="text-center mt-28">
        <hr
          className={`border-0.5 pb- ${
            darkMode ? "border-gray-100" : "border-gray-400"
          } mb-6`}
        />
        <h1
          className={`text-4xl lg:text-5xl  font-bold  mb-10 pt-10 no-shadow ${
            darkMode ? "text-white" : "text-[#103c84]"
          }`}
        >
          Species
        </h1>
        <h2
          className={`text-xl lg:text-2xl font-bold pb-10 no-shadow ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Some of the species thriving at the Woodland Conservation Site.
        </h2>
        <p
          className={`relative left-5 text-left ${
            darkMode ? "text-gray-600" : "text-gray-400"
          }`}
        >
          *Pictures not taken at Woodland Conservation Site
        </p>
        <div className="w-full">
          <FloraFaunaFungi />
        </div>
      </div>
      {/* Footer Section */}
    </div>
  );
};

// Export the Ecosystem component so it can be used in other parts of the app
export default Ecosystem;

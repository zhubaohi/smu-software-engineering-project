/**
 * 
 * Purpose: This file defines the 'About' page of the website. It includes the following sections:
 *          - A slideshow showcasing images related to the website's mission.
 *          - A mission statement with a translucent background.
 *          - A grid layout for team member introductions.
 *          - A testimonials section with an interactive carousel feature and a button to add new testimonials.
 *          - A social media section with icons for Facebook, Twitter, and Instagram that include hover-based 
 *            speech functionality.
 *
 * @author Mariam Nasir (A00460192)
 * 
 * Notes for future development:
 * - The 'Add yours too!' button in the testimonials section and the social media icons include hover functionality.
 * - The dark mode feature has potential to be optimized. 
 * - Potential to add softer, realistic, feminine voice to hover-based speech functionality and mission 
 *   statement speech API. Probably for a price.
 * 
 */


import React, { useState, useEffect, useContext, } from "react";
import { Link } from "react-router-dom";
import { FaVolumeUp } from 'react-icons/fa';
import { DarkModeContext } from "../DarkModeContext";

const About = () => {

    // Accessing darkMode value from DarkModeContext
    const { darkMode } = useContext(DarkModeContext);

    // Changing text color based on darkMode state
    if (darkMode) {
        document.body.style.color = "white";  // Set text color to white for dark mode
    } else {
        document.body.style.color = "black";  // Set text color to black for light mode
    }

    // State to track which team member is selected (if any)
    const [selectedMember, setSelectedMember] = useState(null);

    // Array of testimonials with image and quote for each
    const testimonials = [
        {
            image: "/imagesforaboutpage/testimonial1.png", // Path to the first testimonial image
            quote: "This is an amazing project! It really makes a difference in preserving nature and history.",
        },
        {
            image: "/imagesforaboutpage/testimonial2.png", // Path to the second testimonial image
            quote: "I love how this project brings the community together to protect our sacred spaces.",
        },
        {
            image: "/imagesforaboutpage/testimonial3.png", // Path to the third testimonial image
            quote: "The Woodland Conservation initiative is truly inspiring. I can't wait to see its impact on future generations.",
        },
    ];

    // State to manage the current testimonial index
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Function to show the next testimonial in the array
    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length); // Loops back to the first testimonial after the last one
    };

    // Function to show the previous testimonial in the array
    const prevTestimonial = () => {
        setCurrentTestimonial(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length // Loops back to the last testimonial after the first one
        );
    };

    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        "/imagesforaboutpage/nature1.png",
        "/imagesforaboutpage/nature2.png",
        "/imagesforaboutpage/nature3.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5000ms = 5 seconds

        return () => clearInterval(interval); // Clean up interval on unmount
    }, [images.length]);

    // Function to read the mission statement
    const readMissionStatement = () => {
        const msg = new SpeechSynthesisUtterance(
            "At Woodland Conservation, we protect biodiversity and historic woodlands, including those around graveyards. Through sustainable practices and community engagement, we honor the connection between nature and heritage, inspiring action to preserve these sacred spaces for future generations."
        );
        window.speechSynthesis.speak(msg);
    };

    return (
        <div className="p-8 flex flex-col items-center">
            {/* Mission Section */}
            <section
                className="p-8 rounded-lg shadow-md flex flex-wrap md:flex-nowrap items-center space-x-0 md:space-x-10 w-full max-w-6xl"
                style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
            >
                <div className="text-center md:text-left space-y-4 max-w-2xl">
                    <h1 className="text-4xl font-bold text-[#103c84]">Our Mission</h1>
                    <p className="text-xl text-gray-700">
                        At Woodland Conservation, we protect biodiversity and historic woodlands,
                        including the vibrant ecosystems of Halifax's St. Margaret’s Bay Area. Through
                        sustainable practices and community engagement, we preserve the connection between nature
                        and heritage, safeguarding unique species and inspiring action to ensure these cherished
                        spaces thrive for future generations.
                    </p>

                    {/* Speaker Icon Button */}
                    <button
                        onClick={readMissionStatement}
                        className="text-xl text-[#103c84] hover:text-[#1e4a99] transition mt-4"
                    >
                        <FaVolumeUp />  {/* React Icon */}
                    </button>
                </div>
                <div className="relative w-[600px] h-[250px] overflow-hidden rounded-lg shadow-md mt-6 md:mt-0">
                    <img
                        src={images[imageIndex]}
                        alt="Mission Image"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                        style={{ opacity: 0.8 }} // Adjust opacity for smooth transition
                    />
                </div>
            </section>

            {/* Team Section */}
            <section className="space-y-8 mt-10">
                <h2 className="text-3xl font-bold text-[#103c84] text-center">Meet Our Team</h2>
                <div className="grid grid-cols-3 gap-y-10 gap-x-16 justify-items-center items-center">
                    {/* Team Leader (Fardin) with Description Card */}
                    <div className="text-center">
                        <img
                            src="/imagesforaboutpage/member1.png"
                            alt="Team Member 1"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md cursor-pointer"
                            onClick={() =>
                                setSelectedMember({
                                    name: "Fardin",
                                    role: "Team Leader",
                                    image: "/imagesforaboutpage/member1.png",
                                    achievements: "Fardin has led numerous successful conservation projects and has been a key figure in community engagement.",
                                })
                            }
                        />
                        <p className="mt-4 text-lg font-semibold">Fardin</p>
                        <p className="text-gray-500">Team Leader</p>
                    </div>
                    {/* Mariam */}
                    <div className="text-center">
                        <img
                            src="/imagesforaboutpage/member2.png"
                            alt="Team Member 2"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md cursor-pointer"
                            onClick={() =>
                                setSelectedMember({
                                    name: "Mariam",
                                    role: "Developer",
                                    image: "/imagesforaboutpage/member2.png",
                                    achievements: "Mariam specializes in developing user-friendly interfaces and has a passion for innovative web design.",
                                })
                            }
                        />
                        <p className="mt-4 text-lg font-semibold">Mariam</p>
                        <p className="text-gray-500">Developer</p>
                    </div>
                    {/* Tenisha */}
                    <div className="text-center">
                        <img
                            src="/imagesforaboutpage/member3.png"
                            alt="Team Member 3"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md cursor-pointer"
                            onClick={() =>
                                setSelectedMember({
                                    name: "Tenisha",
                                    role: "Developer",
                                    image: "/imagesforaboutpage/member3.png",
                                    achievements: "Tenisha has a knack for backend development and ensures seamless system integration.",
                                })
                            }
                        />
                        <p className="mt-4 text-lg font-semibold">Tenisha</p>
                        <p className="text-gray-500">Developer</p>
                    </div>
                    {/* Himshree */}
                    <div
                        className="text-center"
                        style={{ gridColumn: "1 / span 2", gridRow: "2" }}
                    >
                        <img
                            src="/imagesforaboutpage/member4.png"
                            alt="Team Member 4"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md cursor-pointer"
                            onClick={() =>
                                setSelectedMember({
                                    name: "Himshree",
                                    role: "Developer",
                                    image: "/imagesforaboutpage/member4.png",
                                    achievements: "Himshree focuses on creating responsive designs and improving accessibility for all users.",
                                })
                            }
                        />
                        <p className="mt-4 text-lg font-semibold">Himshree</p>
                        <p className="text-gray-500">Developer</p>
                    </div>
                    {/* Kelly */}
                    <div
                        className="text-center"
                        style={{ gridColumn: "2 / span 2", gridRow: "2" }}
                    >
                        <img
                            src="/imagesforaboutpage/member5.png"
                            alt="Team Member 5"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md cursor-pointer"
                            onClick={() =>
                                setSelectedMember({
                                    name: "Kelly",
                                    role: "Developer",
                                    image: "/imagesforaboutpage/member5.png",
                                    achievements: "Kelly excels in database management and ensures data integrity across all systems.",
                                })
                            }
                        />
                        <p className="mt-4 text-lg font-semibold">Kelly</p>
                        <p className="text-gray-500">Developer</p>
                    </div>
                </div>

                {/* Modal for Team Member Description */}
                {selectedMember && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full transition-transform transform scale-100">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-bold text-[#103c84]">{selectedMember.name}</h3>
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="text-[#103c84] hover:text-gray-700"
                                >
                                    Close
                                </button>
                            </div>
                            <img
                                src={selectedMember.image}
                                alt={selectedMember.name}
                                className="w-32 h-32 mx-auto rounded-full object-cover mt-4 mb-4"
                            />
                            <p className="text-lg">{selectedMember.achievements}</p>
                            {/* Speaker Icon for Text-to-Speech */}
                            <button
                                onClick={() => {
                                    const speech = new SpeechSynthesisUtterance(
                                        `${selectedMember.name}. Role: ${selectedMember.role}. ${selectedMember.achievements}`
                                    );
                                    speechSynthesis.speak(speech);
                                }}
                                className="mt-4 flex items-center text-[#103c84] hover:text-gray-700"
                            >
                                <FaVolumeUp />  {/* React icon for speaker */}
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* Testimonials Section */}
            <section className="mt-12 p-8">
                <div className="relative max-w-4xl mx-auto">
                    {/* Left Arrow Outside Card */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-[-70px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-[#103c84] text-white rounded-full hover:scale-110 transition-transform z-10"
                        aria-label="Previous Testimonial"
                    >
                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-r-[14px] border-t-transparent border-b-transparent border-r-white"></div>
                    </button>

                    {/* White Card */}
                    <div className="bg-white rounded-lg shadow-md p-8 mx-8">
                        <h2 className="text-3xl font-bold text-[#103c84] text-center mb-6">Testimonials</h2>
                        <div className="overflow-hidden">
                            <div
                                className="flex w-full transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-full flex items-center justify-center space-x-8"
                                    >
                                        <div className="w-1/3">
                                            <img
                                                src={testimonial.image}
                                                alt="Testimonial"
                                                className="w-full h-auto rounded-lg object-cover"
                                            />
                                        </div>
                                        <div className="w-2/3">
                                            <p className="text-lg italic text-gray-700">
                                                "{testimonial.quote}"
                                            </p>
                                            <p className="mt-4 text-sm text-gray-500">
                                                <Link
                                                    to="/contact"
                                                    className="inline-block py-2 px-6 bg-[#103c84] text-white rounded-full text-center transition-all hover:bg-[#1e4a99]"
                                                    aria-label="Add your testimonial"
                                                    onMouseEnter={() => {
                                                        const msg = new SpeechSynthesisUtterance("Add your testimonial");
                                                        window.speechSynthesis.speak(msg);
                                                    }}
                                                >
                                                    Add yours too!
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow Outside Card */}
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-[-70px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-[#103c84] text-white rounded-full hover:scale-110 transition-transform z-10"
                        aria-label="Next Testimonial"
                    >
                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[14px] border-t-transparent border-b-transparent border-l-white"></div>
                    </button>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="mt-10">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#103c84] mb-8">Follow Us!</h2>
                    <div className="flex justify-center space-x-14">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                alt="Facebook"
                                className="w-40 h-40 hover:scale-110 transition-transform"
                                onMouseEnter={() => {
                                    const msg = new SpeechSynthesisUtterance("Follow us on Facebook");
                                    window.speechSynthesis.speak(msg);
                                }}
                            />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://freepnglogo.com/images/all_img/1729449055_twitter-logo-square%20shape-png.png"
                                alt="X"
                                className="w-40 h-40 hover:scale-110 transition-transform"
                                onMouseEnter={() => {
                                    const msg = new SpeechSynthesisUtterance("Follow us on Twitter");
                                    window.speechSynthesis.speak(msg);
                                }}
                            />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                alt="Instagram"
                                className="w-40 h-40 hover:scale-110 transition-transform"
                                onMouseEnter={() => {
                                    const msg = new SpeechSynthesisUtterance("Follow us on Instagram");
                                    window.speechSynthesis.speak(msg);
                                }}
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;




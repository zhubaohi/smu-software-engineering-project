/**
 * Home Component
 * 
 * This component renders the homepage of the Woodland Conservation site. It features a full-screen 
 * background image with a semi-transparent overlay and animated welcome text.
 * The component uses Tailwind CSS for layout and responsive styling.
 * 
 * @fileoverview Home page component with background image and animated welcome text.
 * @author Md Golam Fardin
 */

// Import the background image for the homepage
import homeImg from "../images/woodland.jpg";

// Define the Home component as a functional component
const Home = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Background Image */}
            <img
                className="w-full h-screen object-cover"
                src={homeImg} // Import the image file as the background
                alt="Woodland" // Alt text for accessibility
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 text-center pt-52">
                {/* Animated Text */}
                
                <h1 className="text-white text-3xl sm:text-3xl lg:text-4xl tracking-wide mb-5 px-20">
                    Welcome to
                </h1>
                <h1 className="text-white font-bold text-4xl sm:text-4xl lg:text-5xl tracking-wide px-10">
                    Woodland Conservation Site
                </h1>
            </div>
        </div>
    );
};

// Export the Home component so it can be used in other parts of the app
export default Home;

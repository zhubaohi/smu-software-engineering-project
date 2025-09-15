/**
 * NoPage Component
 * 
 * This component is displayed when the user navigates to a non-existent or undefined route.
 * It renders a large "NoPage" heading to inform the user that the requested page is unavailable.
 * 
 * @fileoverview The fallback component for undefined routes.
 * @author Md Golam Fardin
 */

// Define the NoPage component, which is a functional component
const NoPage = () => {
    return (
        // Render a large "NoPage" heading with custom styles
        <h1 className="break-normal font-semibold text-8xl text-blue-900">
            NoPage
        </h1>
    );
};
  
// Export the NoPage component to be used in other parts of the app
export default NoPage;
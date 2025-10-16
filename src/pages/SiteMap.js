/**
 * 
 * Purpose: The `SiteMap.js` component is used to display an interactive map of the 
 *          St. Margaret's Bay Woodland Conservation Site:
 *            - It utilizes the `react-leaflet` library to render the map and places markers and polygons to highlight 
 *              various areas of the site, such as the site border, rewilding area, yellow birch area, and wetland area. 
 *            - The map is interactive, allowing users to zoom and pan, and includes a "Locate Me" button that uses 
 *              the browser's geolocation API to center the map on the user's current location. 
 *            - Additionally, it includes markers for specific points of interest, like the farmhouse foundation and wells.
 *            
 * @author Mariam Nasir (A00460192)
 * 
 * Notes for future development:
 * 
 * - The sitemap page has not been optimized. Lots of work to be done in order for sitemap.js to function as expected.
 * - Sitemap does not render when coded for only the area of the Woodland Conservation Site to be accessible.
 * - Issues with rendering the right coordinates.
 * - Locate me feature is accurate, but should be optimized to warn user they are not in the site when out of bounds.
 * - Sitemap should be optimized to not render in the middle of the ocean.
 * - Sitemap needs to be optimized to have highlighted areas accurately define specific locations on the site. 
 * - Icons for sitemap markers need to be added. Please ensure changes don't disrupt rendering of the map.
 * - Leaflet may not be suitable for the sitemap with such specific requirements. May need to switch to Google API.
 * - If sitemap features above have been implemented, this could be very unique and helpful.
 * 
 */


import React, { useRef, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import { FaLocationArrow } from 'react-icons/fa'; // Icon for the button
import { useState } from 'react';
import { DarkModeContext } from "../DarkModeContext"; // Access dark mode context


const SiteMap = () => {
    const mapRef = useRef();
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    //Use this for dark mode
    const { darkMode } = useContext(DarkModeContext);


    const handleLocateMe = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setLat(latitude);
                setLon(longitude);
                mapRef.current?.setView([latitude, longitude], 14);
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    // Adjusted Coordinates for Areas and Markers
    const siteBorder = [
        [44.532, -63.983], // Top-left corner
        [44.532, -63.972], // Top-right corner
        [44.524, -63.972], // Bottom-right corner
        [44.524, -63.983], // Bottom-left corner
    ];

    const rewildingArea = [
        [44.530, -63.982],
        [44.530, -63.978],
        [44.526, -63.978],
        [44.526, -63.982],
    ];

    const yellowBirchArea = [
        [44.528, -63.976],
        [44.530, -63.974],
        [44.528, -63.973],
        [44.526, -63.974],
    ];

    const wetlandArea = [
        [44.524, -63.981],
        [44.525, -63.978],
        [44.523, -63.978],
        [44.523, -63.981],
    ];

    const farmhouseCoords = [44.528, -63.980];
    const well1Coords = [44.529, -63.979];
    const well2Coords = [44.527, -63.981];
    const trailhead1Coords = [44.530, -63.977];
    const trailhead2Coords = [44.526, -63.977];

    return (
        <div className="container mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-4">St. Margaret's Bay Woodland Conservation Site Map</h1>
            <MapContainer center={[44.528, -63.978]} zoom={14} style={{ height: '500px' }} ref={mapRef}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Single Site Border */}
                <Polygon pathOptions={{ color: 'black', weight: 3 }} positions={siteBorder}>
                    <Popup>Site Border</Popup>
                </Polygon>

                {/* Rewilding Area */}
                <Polygon pathOptions={{ color: 'green', weight: 2 }} positions={rewildingArea}>
                    <Popup>Rewilding Area</Popup>
                </Polygon>

                {/* Yellow Birch Area */}
                <Polygon pathOptions={{ color: 'orange', weight: 2 }} positions={yellowBirchArea}>
                    <Popup>Yellow Birch Area</Popup>
                </Polygon>

                {/* Wetland Area */}
                <Polygon pathOptions={{ color: 'cyan', weight: 2 }} positions={wetlandArea}>
                    <Popup>Wetland Area</Popup>
                </Polygon>

                {/* Markers */}
                <Marker position={farmhouseCoords}>
                    <Popup>Farmhouse Foundation</Popup>
                </Marker>

                <Marker position={well1Coords}>
                    <Popup>Well 1</Popup>
                </Marker>

                <Marker position={well2Coords}>
                    <Popup>Well 2</Popup>
                </Marker>

                <Marker position={trailhead1Coords}>
                    <Popup>Trailhead 1</Popup>
                </Marker>

                <Marker position={trailhead2Coords}>
                    <Popup>Trailhead 2</Popup>
                </Marker>
            </MapContainer>

            <button
                onClick={handleLocateMe}
                className="flex items-center gap-2 p-2 bg-blue-500 text-white rounded-full shadow-md mt-4"
            >
                <FaLocationArrow />
                Locate Me
            </button>
        </div>
    );
};

export default SiteMap;


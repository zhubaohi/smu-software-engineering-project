/**
 * FloraFaunaFungi Component
 * 
 * This component serves as a subcomponent for displaying information about various
 * biological categories: Fauna, Flora, and Fungi. It imports data for each category
 * from external files and uses a `Layer` component to display the data in an organized
 * layout.
 * 
 * Author: Md Golam Fardin
 */

import Layer from "./Layer"; // Import the Layer component used to display each category
import floraData from "../../data/floraData"; // Import data for flora
import faunaData from "../../data/faunaData"; // Import data for fauna
import fungiData from "../../data/fungiData"; // Import data for fungi

const FloraFaunaFungi = () => {
  return (
    <div className="flex-row pt-2 pb-5">
      {/* Display the Fauna category */}
      <Layer heading="Fauna" data={faunaData} />
      
      {/* Display the Flora category */}
      <Layer heading="Flora" data={floraData} />
      
      {/* Display the Fungi category */}
      <Layer heading="Fungi" data={fungiData} />
    </div>
  );
};

export default FloraFaunaFungi;

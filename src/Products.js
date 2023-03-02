import React, { useState, useEffect } from "react";
import FeaturedProducts from "./FeaturedProducts";

const ParentComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make API call to retrieve the products data
    fetch(
      "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=SBX-d75429346-e2546562&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=samsung%20tv&paginationInput.entriesPerPage=4"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <FeaturedProducts products={products} />
    </div>
  );
};

export default ParentComponent;

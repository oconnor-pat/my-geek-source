import React, { useState, useEffect } from "react";
import FeaturedProducts from "./FeaturedProducts";

const ParentComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make API call to retrieve the products data
    fetch("https://example.com/products")
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

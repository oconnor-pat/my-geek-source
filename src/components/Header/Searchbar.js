import React, { useState } from "react";

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // API call to search for products
    console.log(`Search for ${searchTerm}`);
  };

  return (
    <header>
      <div onSubmit={handleSubmit}>
        <label htmlFor="product-search">search products</label>
        <input
          type=""
          id="product-search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </header>
  );
}

export default ProductSearch;

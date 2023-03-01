/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { FeaturedProductsContainer } from "../styles/Featuredproducts.styled";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.bestbuy.com/v1/products(longDescription=*)?apiKey=${apiKey}&sort=bestSellingRank.asc&show=name,description,regularPrice,image,longDescription,url`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <FeaturedProductsContainer>
      <h3>Featured products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.sku}>
            <h4>{product.name}</h4>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>{product.regularPrice}</p>
          </li>
        ))}
      </ul>
    </FeaturedProductsContainer>
  );
};

export default FeaturedProducts;

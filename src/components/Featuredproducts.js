/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import {
  FeaturedProductsContainer,
  FeaturedProductsImage,
  FeaturedProductsImageWrapper,
} from "../styles/Featuredproducts.styled";

const FeaturedProducts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://svcs.ebay.com/services/search/FindingService/v1";
      const params = new URLSearchParams({
        "OPERATION-NAME": "findItemsByKeywords",
        "SERVICE-VERSION": "1.0.0",
        "SECURITY-APPNAME": "SBX-d75429346-e2546562",
        "RESPONSE-DATA-FORMAT": "JSON",
        "REST-PAYLOAD": true,
        keywords: "samsung tv",
        "paginationInput.entriesPerPage": 4,
      });
      const response = await fetch(`${url}?${params}`, { mode: "no-cors" });
      const data = await response.json();

      console.log(data);
      setItems(data.findItemsByKeywordsResponse[0].searchResult[0].item);
    };

    fetchData();
  }, []);

  return (
    <>
      <FeaturedProductsContainer>
        <h1>Featured Products</h1>
        <FeaturedProductsImageWrapper>
          {items.map((item) => (
            <FeaturedProductsImage
              key={item.itemId[0]}
              src={item.galleryURL[0]}
              alt={item.title[0]}
            />
          ))}
        </FeaturedProductsImageWrapper>
      </FeaturedProductsContainer>
    </>
  );
};

export default FeaturedProducts;

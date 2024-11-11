import React, { useEffect, useState } from "react";
import MotionHoc from "./MotionHoc";
import "../styles/rows.css";
import { useCategory } from "./CategoryContext";

const CoffeeComponent = () => {
  const { selectedCategoryId } = useCategory();
  // console.log(selectedCategoryId);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (selectedCategoryId) {
      const fetchProducts = async () => {
        try {
          const response = await fetch(
            `https://getsu.liara.run/api/categories`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          const products = await response.json();
          setProducts(products);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchProducts();
    }
  }, [selectedCategoryId]);

  useEffect(() => {
    if (products.length > 0 && selectedCategoryId) {
      const filtered = products.filter(
        (product) => product.categoryId === selectedCategoryId
      );
      setFilteredProducts(filtered);
    }
  }, [products, selectedCategoryId]);

  return (
    <>
      {/* Thay will get from api */}
      <h1>{products[0]?.name || "Loading..."}</h1>
      <div className="container-rows">
        <div className="name-product">
          {filteredProducts.map((item) => {
            return <p className="rows">{item.name}</p>;
          })}
        </div>
        <div className="price-product">
          {filteredProducts.map((item) => {
            return <p className="price-rows">{item.price}</p>;
          })}
        </div>
      </div>
    </>
  );
};

const Coffee = MotionHoc(CoffeeComponent);
export default Coffee;

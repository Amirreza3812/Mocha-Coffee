import React, { useEffect, useState } from "react";
import MotionHoc from "./MotionHoc";
import "../styles/rows.css";
import { useCategory } from "./CategoryContext";

const CoffeeComponent = () => {
  const { selectedCategoryId } = useCategory();
  console.log(selectedCategoryId);
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
          console.log(products);
        } catch (error) {
          console.error("Error fetching products:", error);
          console.log(products);
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
      console.log("Filtered Products:", filtered);
    }
  }, [products, selectedCategoryId]);

  return (
    <>
      {/* Thay will get from api */}
      <h1>COFFE</h1>
      <div className="container-rows">
        <div className="name-product">
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
        </div>
        <div className="price-product">
          <p className="price-rows">30</p>
          <p className="price-rows">60</p>
          <p className="price-rows">90</p>
          <p className="price-rows">95</p>
          <p className="price-rows">95</p>
          <p className="price-rows">95</p>
          <p className="price-rows">70</p>
        </div>
      </div>
    </>
  );
};

const Coffee = MotionHoc(CoffeeComponent);
export default Coffee;

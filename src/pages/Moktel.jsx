import React, { useEffect, useState } from "react";
import MotionHoc from "./MotionHoc";
import "../styles/rows.css";
import { useCategory } from "./CategoryContext";
import CoffeeBack from "../assests/CoffeBack/coffe-2.jpeg";
import BackDeser from "../assests/CoffeBack/desr8.jpg";
import Sidebar from "../components/sidebar";

const MoktelComponent = () => {
  const { selectedCategoryId } = useCategory();
  // console.log(selectedCategoryId);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (selectedCategoryId) {
      const fetchProducts = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `https://getsuback.liara.run/api/categories`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          const products = await response.json();
          setProducts(products);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }
  }, [selectedCategoryId]);

  useEffect(() => {
    if (products.length > 0 && selectedCategoryId) {
      // Find the category that matches the selectedCategoryId
      const selectedCategory = products.find(
        (category) => category._id === selectedCategoryId
      );

      // If the category is found, get its products
      if (selectedCategory && selectedCategory.products) {
        setFilteredProducts(selectedCategory.products);
      } else {
        setFilteredProducts([]); // No products found for the selected category
      }
    }
  }, [products, selectedCategoryId]);

  return (
    <>
      <Sidebar />
      <img src={BackDeser} alt="" className="Back-img" />
      <h1 className="h1">{loading ? "...Loading" : products[2]?.name}</h1>
      <div className="container-rows">
        <div className="name-product">
          {filteredProducts.map((item) => {
            return (
              <p className="rows" key={item.id}>
                {item.name}
              </p>
            );
          })}
        </div>
        <div className="price-product">
          {filteredProducts.map((item) => {
            return (
              <p className="price-rows" key={item.id}>
                {item.price}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Moktel = MotionHoc(MoktelComponent);

export default Moktel;

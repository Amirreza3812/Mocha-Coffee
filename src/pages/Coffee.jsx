import React, { useEffect, useState } from "react";
import MotionHoc from "./MotionHoc";
import "../styles/rows.css";
import { useCategory } from "./CategoryContext";
import CoffeeBack1 from "../assests/CoffeBack/coffe-1.jpg";
import CoffeeBack2 from "../assests/CoffeBack/coffe-2.jpeg";
import CoffeeBack3 from "../assests/CoffeBack/Dessert-2.jpg";

const CoffeeComponent = () => {
  const { selectedCategoryId } = useCategory();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Slideshow state
  const images = [CoffeeBack1, CoffeeBack2, CoffeeBack3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup
  }, [images.length]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (selectedCategoryId) {
      const fetchProducts = async () => {
        setLoading(true);
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
        } finally {
          setLoading(false);
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
      <div className="slideshow-container">
        <img src={images[currentImageIndex]} alt="" className="Back-img" />
        <button className="prev-button" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="next-button" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <h1>{loading ? "Loading..." : products[0]?.name}</h1>
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

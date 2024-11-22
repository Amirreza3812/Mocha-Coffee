import React, { useEffect, useState } from "react";
import MotionHoc from "./MotionHoc";
import "../styles/rows.css";
import { useCategory } from "./CategoryContext";
import CoffeeBack1 from "../assests/CoffeBack/coffe-1.jpg";
import CoffeeBack2 from "../assests/CoffeBack/coffe-2.jpeg";
import CoffeeBack3 from "../assests/CoffeBack/Dessert-2.jpg";
import Sidebar from "../components/sidebar";
const PishfoodComponent = () => {
  const { selectedCategoryId } = useCategory();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Slideshow state
  const images = [CoffeeBack1, CoffeeBack2, CoffeeBack3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(""); // To manage animation class
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

  // Change image automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically move to the next image
    }, 5000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const handleNext = () => {
    setAnimationClass("slide-in"); // Apply animation class
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 0); // Trigger animation
  };

  // Reset animation class after each transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass(""); // Remove the animation class after the animation ends
    }, 1500); // Duration of the CSS animation (must match your CSS)

    return () => clearTimeout(timer); // Cleanup timer
  }, [currentImageIndex]);

  return (
    <>
      <Sidebar />
      <div className="slideshow-container">
        <div className={`slideshow-images ${animationClass}`}>
          <img src={images[currentImageIndex]} alt="" className="Back-img" />
        </div>
        {/* <button className="prev-button" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="next-button" onClick={handleNext}>
          &#10095;
        </button> */}
      </div>
      <h1 className="Yekan h1">{loading ? "...Loading" : products[6]?.name}</h1>{" "}
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

const Pishfood = MotionHoc(PishfoodComponent);

export default Pishfood;

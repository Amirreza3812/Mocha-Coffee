import React, { useEffect, useMemo, useState } from "react";
import MotionHoc from "./MotionHoc";
import "../styles/rows.css";
import { useCategory } from "./CategoryContext";
import CoffeeBack1 from "../assests/CoffeBack/coffe-1.jpg";
import CoffeeBack2 from "../assests/CoffeBack/coffe-2.jpeg";
import CoffeeBack3 from "../assests/CoffeBack/Dessert-2.jpg";
import Sidebar from "../components/sidebar";

const CoffeeComponent = ({ url }) => {
  const { selectedCategoryId } = useCategory();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  // Memoize static slideshow images
  const images = useMemo(() => [CoffeeBack1, CoffeeBack2, CoffeeBack3], []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(""); // To manage animation class

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://getsuback.liara.run/api/categories`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const category = await response.json();
      const filtered = category?.filter(
        (cat) => cat?._id === selectedCategoryId
      );
      setCategory(filtered);

      filtered.map((item) => {
        setProducts(item.products);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategoryId) {
      fetchProducts();
    }
  }, [selectedCategoryId]);

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
      </div>

      <h1>{loading ? "Loading..." : category[0]?.name}</h1>
      <div className="container-rows">
        <div className="name-product">
          {products.map((item) => (
            <p className="rows" key={item.id}>
              {item.name}
            </p>
          ))}
        </div>
        <div className="price-product">
          {products.map((item) => (
            <p className="price-rows" key={item.id}>
              {item.price}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const Coffee = MotionHoc(CoffeeComponent);
export default Coffee;

import React, { createContext, useContext, useState } from "react";

// Create a context with default value of null for category
const CategoryContext = createContext(null);

// Custom hook to use the Category context
export const useCategory = () => useContext(CategoryContext);

// Provider component that wraps the children and provides the context value
export const CategoryProvider = ({ children }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // Function to update the selected category
  const selectCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategoryId, selectCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

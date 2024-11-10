import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const data = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://getsu.liara.run/api/categories"); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result); // Set the data from the API response
        setLoading(false); // Data is loaded, so set loading to false
        
        // console.log("OK");
      } catch (error) {
        setError("Failed to fetch data"); // Handle error if something goes wrong
        setLoading(false); // Even if there's an error, stop the loading state
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array means it runs once when the component mounts

  // Render loading, error, or the actual content
  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  console.log(JSON.stringify(data));
  return (
    <div>
      {/* <p>{console.log(JSON.stringify(data))}</p> */}
    </div>
  );
};

export default data;

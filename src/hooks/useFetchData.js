import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Define the fetchData function to fetch data from the API
    const fetchData = async () => {
      // Set the isLoading state to true to indicate data is being fetched
      setIsLoading(true);

      try {
        // Send a request to the provided URL
        const response = await fetch(url);
        // Parse the JSON data from the response
        const jsonData = await response.json();

        // If the response is OK (status code 200), update the data state
        if (response.ok) {
          setData(jsonData);
        } else {
          // If the response is not OK, set the error state with the error message
          setError(`Error fetching data from the API: ${jsonData.message}`);
        }
      } catch (error) {
        // If there is a network error, set the error state with a network error message
        setError("Network error: Unable to connect to the API.");
      } finally {
        // Set the isLoading state to false to indicate data fetching is complete
        setIsLoading(false);
      }
    };

    // Check if the URL has a value (not null or undefined)
    if (url) {
      // If the URL has a value, call the fetchData function to fetch data from the API
      fetchData();
    }
    // The useEffect hook will be triggered when the url variable changes
  }, [url]);

  return { data, error, isLoading };
};

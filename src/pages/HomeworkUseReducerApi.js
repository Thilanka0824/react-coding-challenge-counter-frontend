import React, { useState } from "react";
import SelectApiRoute from "../components/SelectApiRoute";
import { useFetchData } from "../hooks/useFetchData";

const HomeworkUseReducerApi = () => {
  const [apiUrl, setApiUrl] = useState(null);
  const { data, error, isLoading } = useFetchData(apiUrl);

  const handleApiRouteSelect = (route, number) => {
    if (route) {
      setApiUrl(
        `https://jsonplaceholder.typicode.com/${route}${
          number ? `/${number}` : ""
        }`
      );
    } else {
      setApiUrl(null);
    }
  };

  return (
    <div>
      <h1>JSONPlaceholder Data Fetcher</h1>
      <SelectApiRoute onApiRouteSelect={handleApiRouteSelect} />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default HomeworkUseReducerApi;

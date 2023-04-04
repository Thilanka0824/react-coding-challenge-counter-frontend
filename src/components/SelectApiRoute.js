import React, { useState } from "react";

const SelectApiRoute = ({ onApiRouteSelect }) => {
  const [route, setRoute] = useState("");
  const [number, setNumber] = useState("");

  const handleClick = () => {
    // Call the 'onApiRouteSelect' function passed as a prop with the current values of 'route' and 'number'
    onApiRouteSelect(route, number);
  };
  return (
    <>
      <label>
        Route:
        <select value={route} onChange={(e) => setRoute(e.target.value)}>
          <option value="">Select route</option>
          <option value="posts">Posts</option>
          <option value="comments">Comments</option>
          <option value="albums">Albums</option>
          <option value="photos">Photos</option>
          <option value="todos">Todos</option>
          <option value="users">Users</option>
        </select>
      </label>
      <label>
        Number (optional):
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button onClick={handleClick}>Fetch Data</button>
    </>
  );
};

export default SelectApiRoute;

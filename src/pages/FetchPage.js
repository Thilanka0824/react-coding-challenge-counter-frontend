/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

const FetchPage = () => {
  const [user, setUser] = useState([]);
  const [refetch, setRefetch] = useState(false);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=2")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
    setRefetch(true);
  }, [refetch]);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Long Distance Couples</h1>

      <div className="show-couples">
        <div className="user-result">
          <img src={user.results[0].picture.large} />
          <p>First Name: {user.results[0].name.first}</p>
          <p>Last Name: {user.results[0].name.last}</p>
          <p>Age: {user.results[0].dob.age}</p>
          <p>City: {user.results[0].location.city}</p>
          <p>Country: {user.results[0].location.country}</p>
        </div>
        <button
          onClick={() => {
            setRefetch(false);
          }}
        >
          Next Couple
        </button>
        <div className="user-result">
          <img src={user.results[1].picture.large} />
          <p>First Name: {user.results[1].name.first}</p>
          <p>Last Name: {user.results[1].name.last}</p>
          <p>Age: {user.results[1].dob.age}</p>
          <p>City: {user.results[1].location.city}</p>
          <p>Country: {user.results[1].location.country}</p>
        </div>
      </div>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
};

export default FetchPage;
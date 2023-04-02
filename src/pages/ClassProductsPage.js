import React, { useState, useReducer } from "react";

import classProductReducer from "../reducers/classProductReducer";
import ProductCard from "../components/ClassProductCard";
import { v4 as uuidv4 } from "uuid";
// import payload from '../payload.json'

const ClassProductsPage = () => {
const [randomUsers, setRandomUsers] = useState([])

const fetchRandomUsers = async () => {
  try {
    const response = await fetch(
      "http://localhost:4000/api/public-data/random-users"
    );
    const data = await response.json();
    setRandomUsers(data.results);
  } catch (error) {
    console.error("Error fetching random users:", error);
  }
}

  const initialState = [
    {
      id: uuidv4(),
      title: "Hogwart's Legacy",
      publisher: "Warner Bros.",
      genre: "Adventure",
      price: 59.99,
    },
    {
      id: uuidv4(),
      title: "Destiny 2",
      publisher: "Bungie",
      genre: "FPS",
      price: 29.99,
    },
    {
      id: uuidv4(),
      title: "The Last of Us",
      publisher: "Sony",
      genre: "Adventure",
      price: 69.99,
    },
    {
      id: uuidv4(),
      title: "Total War: Warhammer III",
      publisher: "Sega",
      genre: "Strategy",
      price: 49.99,
    },
    {
      id: uuidv4(),
      title: "Dune",
      publisher: "Warner Bros.",
      genre: "Sci-Fi",
      price: 19.99,
    },
  ];

  const [productState, dispatch] = useReducer(
    classProductReducer,
    initialState
  );

  const getData = async () => {
    const response = await fetch('http://localhost:4000/api/products')

    dispatch({
      type: "ADD_PAYLOAD",
      payload: await response.json(),
    });
  }

  return (
    <div className="App">
      <h1 style={{ marginTop: "120px" }}> Class Video Game Products</h1>
      <div className="button-container">
        <button
          className="add-blank-button"
          onClick={() =>
            dispatch({
              type: "ADD_BLANK",
            })
          }
        >
          Add Blank Card
        </button>
        <button
          className="add-blank-button"
          onClick={() =>
            dispatch({
              type: "ADD_API",
            })
          }
        >
          Add Api
        </button>
        {/* <button
        className="add-blank-button"
        onClick={() =>
          dispatch({
            type: "ADD_PAYLOAD",
            payload: payload,
          })
        }
      >
        Payload
      </button> */}
        <button className="add-blank-button" onClick={() => getData()}>
          Payload
        </button>
        <button
          className="add-blank-button"
          onClick={() => {
            fetchRandomUsers();
            console.log(randomUsers);
          }}
        >
          Fetch Users
        </button>
      </div>
      {productState.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            publisher={product.publisher}
            genre={product.genre}
            price={product.price}
            //pass in dispatch for DELETE_PRODUCT
            deleteProduct={(id) =>
              dispatch({
                type: "DELETE_PRODUCT",
                product_id: id,
              })
            }
            editProduct={(editProductObj) =>
              dispatch({
                type: "EDIT_PRODUCT",
                data: editProductObj,
              })
            }
          />
        );
      })}
      <h5 style={{ marginBottom: "10px", marginTop: "120px" }}>too far</h5>
    </div>
  );
};

export default ClassProductsPage;

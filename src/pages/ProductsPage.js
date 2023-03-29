import React, { useReducer } from "react";
import productReducer from "../reducers/productReducer";
import { ProductCard } from "../components/ProductCard";
import { v4 as uuidv4 } from "uuid";

const ProductsPage = () => {
  const initialState = [
    {
      id: uuidv4(),
      title: "Hogwart's Legacy",
      publisher: "Warner Bros",
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
      title: "The Last of US",
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
      title: "Total War: Warhammer III",
      publisher: "Sega",
      genre: "Strategy",
      price: 29.99,
    },
  ];

  const [productState, dispatch] = useReducer(productReducer, initialState);

  return (
    <div>
      <h1 style={{ marginTop: "120px" }}> Video Game Products</h1>

      {productState.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            publisher={product.publisher}
            genre={product.genre}
            price={product.price}
            deleteProduct={(id) =>
              dispatch({
                type: "DELETE_PRODUCT",
                id: id,
              })
            }
            editProduct={(data) =>
              dispatch({
                type: "EDIT_PRODUCT",
                data: data,
              })
            }
          />
        );
      })}

      <h5 style={{ marginBottom: "10px", marginTop: "120px" }}>too far</h5>
    </div>
  );
};

export default ProductsPage;

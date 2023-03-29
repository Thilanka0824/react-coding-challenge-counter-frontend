import React, { useState } from "react";

export const ProductCard = (props) => {
  const [editBtn, setEditBtn] = useState(false);

  const [editProductState, setEditProductState] = useState({
    id: props.id,
    title: props.title,
    publisher: props.publisher,
    genre: props.genre,
    price: props.price,
  });

  const handleInputChange = (e) => {
    setEditProductState({
      ...editProductState,
      [e.target.name]: e.target.value,
    });
  };

  const editDataFunc = () => {
    props.editProduct(editProductState);
    setEditBtn(false);
  };

  return (
    <div className="product-card">
      <h2>
        {editBtn ? (
          <input
            name="title"
            value={editProductState.title}
            onChange={handleInputChange}
          />
        ) : (
          <u>{props.title}</u>
        )}
      </h2>
      <p>
        Publisher:{" "}
        {editBtn ? (
          <input
            name="publisher"
            value={editProductState.publisher}
            onChange={handleInputChange}
          />
        ) : (
          props.publisher
        )}
      </p>
      <p>
        Genre:{" "}
        {editBtn ? (
          <input
            name="genre"
            value={editProductState.genre}
            onChange={handleInputChange}
          />
        ) : (
          props.genre
        )}
      </p>
      <p>Price: {" "} 
      {editBtn ? (
        <input
          name="price"
          value={editProductState.price}
          onChange={handleInputChange}
        />
      ) : (
      `$${props.price}`
      )}
      </p>

      {editBtn ? (
        <button onClick={editDataFunc}>Complete</button> ) :
      (
      <button onClick={() => setEditBtn(!editBtn)}>Edit</button>)}
      <button onClick={() => props.deleteProduct(props.id)}>Delete!</button>
    </div>
  );
};

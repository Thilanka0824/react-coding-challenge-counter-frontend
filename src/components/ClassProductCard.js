import React, { useState } from "react";
// import "./ProductCard.css";

export default function ClassProductCard(props) {
  const [editBtn, setEditBtn] = useState(false);

  const [editProductState, setEditProductState] = useState({
    id: props.id,
    title: props.title,
    publisher: props.publisher,
    genre: props.genre,
    price: props.price,
  });

  const editProductFunc = () => {

    props.editProduct(editProductState);
    setEditBtn(false)
  };

  const onChangeHandler = (e) => {
    setEditProductState({
      ...editProductState,
      [e.target.name]:  e.target.value,
    })
  
  };

  return (
    <div className="product-card">
      <h2>
        <u>{props.title}</u>
      </h2>

      {/* onclick should trigger props.deleteProduct(id) */}
      {editBtn ? (
        <div>
          <p>Start editing</p>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={editProductState.title}
            onChange={onChangeHandler}
          />
          <br />
          <label htmlFor="publisher">Publisher: </label>
          <input 
            type="text"
            name="publisher"
            value={editProductState.publisher}
            onChange={onChangeHandler}
          />
          <br />
          <label htmlFor="genre">Genre: </label>
          <input 
            type="text"
            name="genre"
            value={editProductState.genre}
            onChange={onChangeHandler}
          />
          <br />
          <label htmlFor="price">Price: </label>
          <input 
            type="number"
            name="price"
            step="0.01"
            min="0"
            value={editProductState.price}
            onChange={onChangeHandler}
          />
          <br />
        <button onClick={editProductFunc}>Save Changes</button>
        </div>
      ) : (
        <>
          <p>Publisher: {props.publisher}</p>
          <p>Genre: {props.genre}</p>
          <p>Price: ${props.price}</p>
        </>
      )}

      <button onClick={() => setEditBtn(!editBtn)}>Edit</button>
      <button onClick={() => props.deleteProduct(props.id)}>Delete!</button>
    </div>
  );
}

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

  //i want a functioning edit button
  const editDataFunc = () => {
    props.editProduct(editProductState);
    setEditBtn(false);
  };

  // dataFunc = () => {
  //   props.data({
  //     ...
  //   })

  // }

  return (
    <div className="product-card">
      <h2>
        <u>{props.title}</u>
      </h2>
      <p>Publisher: {props.publisher}</p>
      <p>Genre: {props.genre}</p>
      <p>Price: ${props.price}</p>

      {editBtn ? <p> True: Start editing</p> : <p>False</p>}
      <button onClick={() => setEditBtn(!editBtn)}>Edit</button>
      <button onClick={() => props.deleteProduct(props.id)}>Delete!</button>
    </div>
  );
};

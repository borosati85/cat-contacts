import React from "react";
import { removeCard } from "../../redux/card/card.actions";
import { useDispatch } from "react-redux";

import "./card.styles.css";

export const Card = ({ card: { first_name, last_name, id, email }, idx }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(removeCard(idx));
  };

  return (
    <div className="card-container">
      <img
        alt="card"
        src={`https://robohash.org/${id}?set=set4&size=300x300`}
      />
      <h2> {`${first_name} ${last_name}`} </h2>
      <p> {email} </p>
      <button onClick={handleDeleteClick} className="delete-button">
        X
      </button>
    </div>
  );
};

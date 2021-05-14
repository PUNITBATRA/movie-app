import React from "react";
const Modal = ({ selectedMovie, setSelectedMovie }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) setSelectedMovie(null);
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedMovie} alt="enlarged" />
    </div>
  );
};
export default Modal;

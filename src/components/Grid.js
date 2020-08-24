import React from "react";
import useGetAnimations from "../hooks/useGetAnimations";
import Item from "./Item";

const Grid = ({ category }) => {
  const { data: images, isLoading } = useGetAnimations(category);

  return (
    <div>
      <h3>{category}</h3>

      <div className="card-container">
        {isLoading && (
          <span className="animate__animated animate__flash">Loading...</span>
        )}

        {!isLoading &&
          images.length > 0 &&
          images.map((image) => {
            return <Item key={image.id} {...image} />;
          })}

        {!isLoading && images.length === 0 && <span>No result found</span>}
      </div>
    </div>
  );
};

export default Grid;

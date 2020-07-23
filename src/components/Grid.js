import React from "react";
import useFetchAnimations from "../hooks/useFetchAnimations";
import Images from "./Images";

const Grid = ({ category }) => {
  const { data, loading } = useFetchAnimations(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>Loading...</p>}

      {!loading && !data.length && <p>Ops! No hay resultados!</p>}

      {!!data.length && (
        <div className="card-container">
          {data.map((img) => (
            <Images key={img.id} {...img} />
          ))}
        </div>
      )}
    </>
  );
};

export default Grid;

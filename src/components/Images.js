import React from "react";

const Images = ({ title, url }) => {
  return (
    <figure className="card-item">
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
};

export default Images;

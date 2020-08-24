import React from "react";

const Item = ({ url, title }) => (
  <figure className="card-item animate__animated animate__fadeIn animate__delay-1s">
    <img src={url} alt={title} />
    {title && <figcaption>{title}</figcaption>}
  </figure>
);

export default Item;

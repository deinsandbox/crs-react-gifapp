import React from "react";
import PropTypes from "prop-types";

const Item = ({ url, title }) => (
  <figure className="card-item animate__animated animate__fadeIn animate__delay-1s">
    <img src={url} alt={title} />
    {title && <figcaption>{title}</figcaption>}
  </figure>
);

Item.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Item;

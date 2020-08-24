import React from "react";
import PropTypes from "prop-types";

const Item = ({ url, title }) => (
  <img
    className="masonry-item animate__animated animate__fadeIn animate__delay-1s"
    src={url}
    alt={title}
  />
);

Item.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Item;

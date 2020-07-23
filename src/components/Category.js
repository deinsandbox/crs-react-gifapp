import React, { useState } from "react";
import PropTypes from "prop-types";

const Category = ({ handleAdd }) => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    text && handleAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleOnChange} />
    </form>
  );
};

Category.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default Category;

import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategory }) => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = text.trim();
    if (item.length > 2) {
      setCategory((items) => [item, ...items]);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" id="" value={text} onChange={handleOnChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default AddCategory;

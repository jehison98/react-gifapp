import React from "react";
import PropTypes from "prop-types";
import "./AddCategory.css";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 1) {
      setCategories(inputValue);
      setInputValue("");
    }
  };

  return (
    <form id="form-search" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Write something"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

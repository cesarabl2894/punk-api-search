import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ inputHandler, currentValue = '' }) => {
  return (
    <div className="row justify-content-center g-1">
      <div className="col-10">
        <input
          type="text"
          className="form-control form-input"
          placeholder="Enter the beer Name..."
          onChange={inputHandler}
          value={currentValue}
        />
      </div>
      <div className="col-2 col-xs-1">
        <button className="btn btn-primary">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  currentValue: PropTypes.string,
};

export default SearchBar;

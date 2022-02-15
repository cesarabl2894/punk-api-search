import React from 'react';
import PropTypes from 'prop-types';

const TipsBox = ({ tips }) => (
  <div className="alert alert-info" role="alert">
    <p>
      <small>
        <strong className="d-block">Tips:</strong>
        {tips}
      </small>
    </p>
  </div>
);

TipsBox.propTypes = {
  tips: PropTypes.string.isRequired,
};

export default TipsBox;

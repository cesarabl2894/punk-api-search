import React from 'react';
import PropTypes from 'prop-types';

const IngredientItem = ({ igredientName, amount }) => {
  const { unit, value } = amount;

  return (
    <p>
      {value} {unit} of {igredientName}
    </p>
  );
};

IngredientItem.propTypes = {
  amount: PropTypes.object.isRequired,
};

export default IngredientItem;

import React from 'react';
import PropTypes from 'prop-types';
import IngredientItem from './IngredientItem';

const IngredientItems = ({ items }) => {
  return (
    <>
      {items.map((item, idx) => (
        <IngredientItem
          key={idx}
          igredientName={item.name}
          amount={item.amount}
        />
      ))}
    </>
  );
};

IngredientItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default IngredientItems;

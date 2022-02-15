import React from 'react';
import IngredientItems from '../Items/IngredientItems';
import PropTypes from 'prop-types';

const IngredientList = ({ ingredientName = '', ingredientItems }) => (
  <dl className="row">
    <dt className="col-sm-2 text-capitalize">{ingredientName}</dt>
    <dd className="col-sm-9">
      {Array.isArray(ingredientItems) && ingredientItems.length > 0 ? (
        <IngredientItems items={ingredientItems} />
      ) : (
        <p>{ingredientItems}</p>
      )}
    </dd>
  </dl>
);

IngredientList.propTypes = {
  ingredientName: PropTypes.string.isRequired,
  ingredientItems: PropTypes.any.isRequired,
};

export default IngredientList;

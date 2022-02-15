import React from 'react';
import PropTypes from 'prop-types';
import IngredientList from './List/IngredientList';

const Ingredients = ({ ingredients }) => {
  const ingredientKeys = Object.keys(ingredients);
  return (
    <div className="pt-4 pb-4">
      <h4 className="mb-3">Recipe Ingredients:</h4>
      {ingredientKeys.map((ingredient) => {
        return (
          <IngredientList
            key={ingredient}
            ingredientName={ingredient}
            ingredientItems={ingredients[ingredient]}
          />
        );
      })}
    </div>
  );
};

Ingredients.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default Ingredients;

import React from 'react';
import Ingredients from 'components/Ingredients/Ingredients';
import PropTypes from 'prop-types';
import TipsBox from 'components/TipsBox/TipsBox';

const ProductDetail = ({
  producDescription,
  ingredients,
  attenuation,
  productName,
  tips,
}) => {
  return (
    <div className="p-4">
      <h3 className="display-4 mb-3">{productName}</h3>
      <p className="lead">{producDescription}</p>
      <div>
        <p>
          <strong>Attenuation:</strong>
        </p>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${attenuation}%` }}
            aria-valuenow={attenuation}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      {ingredients && <Ingredients ingredients={ingredients} />}
      <TipsBox tips={tips} />
    </div>
  );
};

ProductDetail.propTypes = {
  producDescription: PropTypes.string,
  ingredients: PropTypes.object,
  attenuation: PropTypes.number,
  productName: PropTypes.string,
  tips: PropTypes.string,
};

export default ProductDetail;

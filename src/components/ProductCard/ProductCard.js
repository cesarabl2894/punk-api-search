import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import ImgPlaceHolder from 'assets/img/img-placeholder.png';

const ProductCard = ({
  imgPath = '',
  productName,
  productDescription,
  id,
  fixedWidth = true,
}) => {
  return (
    <div
      className="card mb-3"
      style={{ maxWidth: fixedWidth ? '540px' : 'auto' }}
    >
      <div className="row align-items-center g-0">
        <div className="d-flex align-items-center justify-content-center col-md-4">
          <img
            src={imgPath ? imgPath : ImgPlaceHolder}
            className="d-block mx-auto w-25"
            alt={productName}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <LinesEllipsis
              text={productDescription}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
            <p className="card-text">
              <Link
                className="btn btn-primary stretched-link mt-3"
                to={`/product/${id}`}
              >
                View Details
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgPath: PropTypes.string,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
};

export default ProductCard;

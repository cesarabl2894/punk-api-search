import React from 'react';
import PropTypes from 'prop-types';
import ProductDetail from 'components/ProductDetail/ProductDetail';
import ImageZoom from 'react-medium-image-zoom';
import ImgPlaceHolder from 'assets/img/img-placeholder.png';

const ProductView = ({ product }) => {
  const {
    description,
    ingredients,
    name,
    image_url,
    attenuation_level,
    brewers_tips,
  } = product;

  return (
    <div className="row align-items-center fadeIn">
      <div className="col-lg-6 mb-4">
        <div className=" d-flex justify-content-center">
          {image_url ? (
            <ImageZoom>
              <img
                className="w-50 d-block mx-auto "
                src={image_url}
                alt={name}
              />
            </ImageZoom>
          ) : (
            <img
              src={ImgPlaceHolder}
              className="w-50 d-block mx-auto"
              alt={name}
            />
          )}
        </div>
        <p className=" mt-5 text-center font-italic">
          {image_url ? 'Click to Zoom Over the image' : 'No Preview Image'}
        </p>
      </div>
      <div className="col-lg-6 mb-4">
        <ProductDetail
          producDescription={description}
          ingredients={ingredients}
          productName={name}
          attenuation={attenuation_level}
          tips={brewers_tips}
        />
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;

import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from 'components/ProductCard/ProductCard';

const CardGroup = ({ items }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3 mt-5">
      {items.map((result) => {
        const { name, tagline, description, image_url, id } = result;
        return (
          <ProductCard
            imgPath={image_url}
            altText={tagline}
            productName={name}
            productDescription={description}
            id={id}
            key={id}
          />
        );
      })}
    </div>
  );
};

CardGroup.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CardGroup;

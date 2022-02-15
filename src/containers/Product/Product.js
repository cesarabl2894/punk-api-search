import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import 'react-medium-image-zoom/dist/styles.css';

import NoResults from 'components/NoResults/NoResults';
import Loader from 'components/Loader/Loader';
import { BASE_URL } from 'config/api';
import ProductView from 'components/ProductView/ProductView';
import RandomBeer from 'components/RandomBeer/RandomBeer';

const Product = () => {
  const [currentProduct, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Fetch Initial Product and update when URL ID change
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(`${BASE_URL}${id}`);
        const [results] = await response.json();
        setProduct(results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    }
    getProduct();
    scrollTop();
  }, [id, setProduct]);

  return (
    <main className="mt-5">
      <div className="container">
        {!isLoading ? (
          <>
            {currentProduct ? (
              <>
                <ProductView product={currentProduct} />
                <RandomBeer />
              </>
            ) : (
              <NoResults />
            )}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </main>
  );
};

export default Product;

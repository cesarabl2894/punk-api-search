import React, { useState, useEffect } from 'react';
import ProductCard from 'components/ProductCard/ProductCard';
import { BASE_URL } from 'config/api';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getRandomBeer() {
      const response = await fetch(`${BASE_URL}random`);
      const [results] = await response.json();
      setRandomBeer(results);
      setLoading(false);
    }
    getRandomBeer();
  }, [id]);

  return (
    <>
      {!isLoading && randomBeer ? (
        <div>
          <h4 className="mb-4">More beers recommendations: </h4>
          <ProductCard
            imgPath={randomBeer.image_url}
            productName={randomBeer.name}
            productDescription={randomBeer.description}
            id={randomBeer.id}
            fixedWidth={false}
          />
        </div>
      ) : (
        <Loader />
      )}
      ;
    </>
  );
};

RandomBeer.propTypes = {};

export default RandomBeer;

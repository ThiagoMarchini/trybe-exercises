import React, { useEffect, useState } from 'react';
import '../App.css';
import ProductCard from '../components/Card';

function Home(params) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/leilao')
      .then((response) => response.json())
      .then((arrayProducts) => {
        console.log(arrayProducts);
        setIsLoading(false);
        setProducts(arrayProducts);
      });
  }, []);

  return (
    <div>
      <h1>Leilão de Centavos:</h1>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <div id="deck">
          {products.map(({ _id, name, image, price }, index) => (
            <ProductCard
              key={_id}
              id={_id}
              index={index}
              name={name}
              image={image}
              price={price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

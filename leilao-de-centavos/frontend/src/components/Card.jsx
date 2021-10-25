import React, { useState, useEffect } from 'react';
import socket from '../utils/client';
import { Card, Button } from 'react-bootstrap';
import './Card.css';

function ProductCard({id, name, price, image, index}) {
  const [currentPrice, setCurrentPrice] = useState(price);

  useEffect(() => {
    socket.on('refreshPrice', (product) => {
      if(product._id === id) setCurrentPrice(product.price);
    })
  }, []);

  const handleClick = () => {
    console.log('handleClick');
    socket.emit('increasePrice', { id });
  };

  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          R$ <span>{currentPrice}</span>
        </Card.Text>
        <Button
          variant="primary"
          onClick={handleClick}
          >
            Dar um lance
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;
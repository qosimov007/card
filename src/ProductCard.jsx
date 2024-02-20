// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Boshqa ma'lumotlar ham ko'rsatilishi mumkin */}
      {/* Rasm uchun: <img src={product.thumbnail} alt={product.title} /> */}
    </div>
  );
};

export default ProductCard;

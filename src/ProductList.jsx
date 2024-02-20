// ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
 <>   <div>
 <h2>Product List</h2>
 {products.map(product => (
   <ProductCard key={product.id} product={product} />
 ))}
</div>
</>
  );
};

export default ProductList;

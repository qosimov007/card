// App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import Filter from './Filter';

const App = ({ productsData }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleFilterChange = (filterValue) => {
    // Filtrlashni amalga oshirish
    const newFilteredProducts = productsData.filter(product =>
      product.title.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredProducts(newFilteredProducts);
  };

  return (
   <>
    <div>
      <h1>Online Shop</h1>
      <Filter onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </div>
   </>
  );
};

export default App;

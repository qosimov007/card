// Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = () => {
    onFilterChange(filterValue);
  };

  return (
<>    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <button onClick={handleFilterChange}>Filter</button>
    </div>
    </>
  );
};

export default Filter;

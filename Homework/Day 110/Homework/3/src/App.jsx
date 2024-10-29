
import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState(null);

  const showProducts = () => {
    const newProducts = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
    setProducts(newProducts);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={showProducts}>Show Products</button>
      {products && (
        <ul style={{ marginTop: '20px' }}>
          {products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;

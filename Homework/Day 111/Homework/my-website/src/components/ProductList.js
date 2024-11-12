import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API-დან მონაცემების მიღება
    const fetchProducts = async () => {
      // აქ შეგიძლიათ API URL ჩაწეროთ რეალურ მონაცემებზე წვდომისთვის
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default ProductList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the API
    axios.get('/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {/* Display product details */}
          <p>{product.name}</p>
          {/* ... other product details */}
        </div>
      ))}
    </div>
  );
}

export default ProductList;

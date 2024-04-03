import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch specific product data
    axios.get(`/api/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Display detailed product information */}
      <h2>{product.name}</h2>
      {/* ... other product details */}
    </div>
  );
}

export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css"; // Create styling as needed

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Failed to load product", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="detail-container">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="detail-img" />
      <p>
        <strong>Price:</strong> 💲{product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Rating:</strong> ⭐ {product.rating.rate} (
        {product.rating.count} reviews)
      </p>
      <button className="cart-button">🛒 Add to Cart</button>
    </div>
  );
}

export default ProductDetail;

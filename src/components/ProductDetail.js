import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../slices/CartSlice";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Failed to load product", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="detail-container">
      <div className="detail-content">
        <img src={product.image} alt={product.title} className="detail-img" />
        <div className="detail-info">
          <h2>{product.title}</h2>
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
          <button className="cart-button" onClick={dispatch(addToCart)}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

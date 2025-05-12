import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Pagination logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  return (
    <div className="container">
      <h2 className="heading">🛍️ Product Catalog</h2>
      <div className="grid">
        {currentProducts.map((product) => (
          <div className="card" key={product.id}>
            <Link to={`/product/${product.id}`} className="card-link">
              <img
                src={product.image}
                alt={product.title}
                className="product-img"
              />
              <h3 className="title">{product.title}</h3>
              <p className="price">💲{product.price}</p>
            </Link>
            <button
              className="cart-button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("Added to cart:", product.id);
                // You can implement add-to-cart logic here
              }}
            >
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ◀ Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}

export default ProductList;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart, Home, Navbar, ProductDetail, ProductsList } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

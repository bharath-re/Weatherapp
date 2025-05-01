import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Menu from "./pages/Menu";
import {
  Careers,
  Cart,
  GiftCards,
  Locations,
  Reservations,
  Rewards,
  SignIn,
  SignUp,
} from "./pages";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Rewards" element={<Rewards />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

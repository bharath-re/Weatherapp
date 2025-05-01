import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Menu from './pages/Menu';
import { Careers, GiftCards, Locations, Reservations, Rewards, SignIn } from './pages';
import Signup from './pages/SignIn';




 function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/gift-cards" element={<GiftCards/>} />
        <Route path="/Reservations" element={<Reservations/>} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Rewards" element={<Rewards />} />

        








        

      </Routes>
    </Router>
  );
}

export default App;

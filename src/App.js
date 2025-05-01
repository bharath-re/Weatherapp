import React from 'react';
import SignIn from './components/SignIn';
import Signup from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


 function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Signup" element={<Signup />} />

        

      </Routes>
    </Router>
  );
}

export default App;

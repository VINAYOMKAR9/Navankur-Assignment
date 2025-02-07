import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Cart  from './components/Cart'
import Login from './components/Login'
// import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'
import AuthProvider from "./context/Auth";
import { CartProvider } from "./components/Cart";
import PrivateRoute from "./components/PrivateRoute";


const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><ProductList /></PrivateRoute>} />
            <Route path="/product/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

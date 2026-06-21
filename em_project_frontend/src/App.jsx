import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";

import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";

import Products from "./components/Products/Products";
import ProductModal from "./components/ProductModal/ProductModal";
import productsData from "./utils/products";

import ClothingItems from "./components/ClothingItems/ClothingItems";
import "./App.css";
import backgroundImage from "./assets/backgrounds/em-background1.png";

function App() {
  const location = useLocation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  const closeAllModals = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  const handleLogin = (data) => {
    console.log("Login:", data);
  };

  const handleRegister = (data) => {
    console.log("Register:", data);
  };

  return (
    <div className="app">
      <Header />
      <main>
        {/* <button onClick={openLoginModal}>Login</button>

        <button onClick={openRegisterModal}>Register</button> */}

        {/* <Products products={productsData} onCardClick={handleCardClick} /> */}
        <Routes>
          <Route path="/" element={<Home onCardClick={handleCardClick} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/clothing-items" element={<ClothingItems onCardClick={handleCardClick} />} />
        </Routes>
      </main>
      {isLoginOpen && <LoginModal onLogin={handleLogin} onClose={closeAllModals} />}

      {isRegisterOpen && <RegisterModal onRegister={handleRegister} onClose={closeAllModals} />}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeProductModal} />}
      {location.pathname !== "/clothing-items" && <Footer />}
    </div>
  );
}

export default App;

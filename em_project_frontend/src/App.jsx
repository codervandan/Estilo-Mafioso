import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// import LaunchOverlay from "./components/LaunchOverlay/LaunchOverlay";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";

import CheckoutModal from "./components/CheckoutModal/CheckoutModal";

import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";

import ProductModal from "./components/ProductModal/ProductModal";
import ClothingItems from "./components/ClothingItems/ClothingItems";
import AddProductModal from "./components/AddProductModal/AddProductModal";
import { createClothingItem, deleteClothingItem, getClothingItems } from "./utils/api";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal/ConfirmDeleteModal";

import "./App.css";

function App() {
  const location = useLocation();
  // const isAdmin = import.meta.env.VITE_ADMIN_MODE === "true";
  const isAdmin = true;

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState("");
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isDeletingProduct, setIsDeletingProduct] = useState(false);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
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

  const handleBuyNow = (product) => {
    setCheckoutProduct(product);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => {
      const isAlreadyInCart = currentItems.some((item) => item._id === product._id);

      if (isAlreadyInCart) {
        return currentItems;
      }

      return [...currentItems, product];
    });

    setSelectedProduct(null);
  };

  const openAddProductModal = () => {
    setIsAddProductOpen(true);
  };

  const closeAddProductModal = () => {
    setIsAddProductOpen(false);
  };

  const handleAddProduct = (newProduct) => {
    return createClothingItem(newProduct)
      .then((savedProduct) => {
        const formattedProduct = {
          ...savedProduct,
          image: savedProduct.image || savedProduct.imageUrl,
        };

        setProducts((currentProducts) => [formattedProduct, ...currentProducts]);
        closeAddProductModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteProduct = (product) => {
    setProductToDelete(product);
  };

  const closeDeleteModal = () => {
    setProductToDelete(null);
  };

  const confirmDeleteProduct = () => {
    if (!productToDelete) {
      return;
    }

    setIsDeletingProduct(true);

    deleteClothingItem(productToDelete._id)
      .then(() => {
        setProducts((currentProducts) => currentProducts.filter((item) => item._id !== productToDelete._id));

        setSelectedProduct((currentProduct) => (currentProduct?._id === productToDelete._id ? null : currentProduct));

        setProductToDelete(null);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsDeletingProduct(false);
      });
  };

  const closeCheckoutModal = () => {
    setCheckoutProduct(null);
  };

  useEffect(() => {
    setIsProductsLoading(true);

    getClothingItems()
      .then((items) => {
        const formattedItems = items.map((item) => ({
          ...item,
          image: item.image || item.imageUrl,
        }));

        setProducts(formattedItems);
        setProductsError("");
      })
      .catch((err) => {
        console.error(err);
        setProductsError("Could not load clothing items.");
      })
      .finally(() => {
        setIsProductsLoading(false);
      });
  }, []);

  return (
    <>
      {/* <LaunchOverlay /> */}

      <div className="app">
        <Header onLoginClick={() => setIsLoginOpen(true)} onRegisterClick={() => setIsRegisterOpen(true)} />

        <main>
          <Routes>
            <Route path="/" element={<Home onCardClick={handleCardClick} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route
              path="/clothing-items"
              element={
                <ClothingItems
                  products={products}
                  onCardClick={handleCardClick}
                  isLoading={isProductsLoading}
                  error={productsError}
                  isAdmin={isAdmin}
                  onAddProductClick={openAddProductModal}
                  onDeleteProduct={handleDeleteProduct}
                />
              }
            />
          </Routes>
        </main>

        {isLoginOpen && <LoginModal onLogin={handleLogin} onClose={closeAllModals} />}

        {isRegisterOpen && <RegisterModal onRegister={handleRegister} onClose={closeAllModals} />}

        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={closeProductModal} onBuyNow={handleBuyNow} onAddToCart={handleAddToCart} />
        )}

        {checkoutProduct && <CheckoutModal product={checkoutProduct} onClose={closeCheckoutModal} />}

        {isAddProductOpen && <AddProductModal onClose={closeAddProductModal} onAddProduct={handleAddProduct} />}

        {productToDelete && (
          <ConfirmDeleteModal
            product={productToDelete}
            onClose={closeDeleteModal}
            onConfirm={confirmDeleteProduct}
            isDeleting={isDeletingProduct}
          />
        )}

        {location.pathname !== "/clothing-items" && <Footer />}
      </div>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import MainLayout from "./components/MainLayout";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import { CartContextProvider } from "./contexts/CartContext";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path="/products/category/:category"
            element={
              <MainLayout>
                <CategoryPage />
              </MainLayout>
            }
          />
          <Route
            path="/products/:id"
            element={
              <MainLayout>
                <ProductPage />
              </MainLayout>
            }
          />
          <Route
            path="/cart"
            element={
              <MainLayout>
                <CartPage />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;

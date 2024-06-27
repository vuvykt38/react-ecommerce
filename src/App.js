import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Login } from "./pages/login";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { UserProvider } from "./context/user-context";
import Checkout from "./pages/cart/checkout";
import Order from "./pages/cart/order";
import ProtectedRoute from "./components/protectedroute";
import ProductPage from "./pages/shop/productdetails";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<ProtectedRoute element={<Checkout />} />} />
              <Route path="/thankyou" element={<ProtectedRoute element={<Order />} />} />
              <Route path="/products/:productId" element={<ProductPage />} />
            </Routes>
          </Router>

        </ShopContextProvider>
      </UserProvider>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { ToastContainer } from "react-toastify";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/check-out" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000} // 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;

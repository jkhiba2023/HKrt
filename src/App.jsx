import CategoryProducts from "./Components/CategoryProducts/CategoryProducts";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navigation from "./Components/Navigation/Navigation";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Products from "./Components/Products/Products";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-7xl w-full bg-white min-h-screen m-auto">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/category/:category"
          element={<CategoryProducts />}
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

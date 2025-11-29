import CategoryProducts from "./Components/CategoryProducts/CategoryProducts";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navigation from "./Components/Navigation/Navigation";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Products from "./Components/Products/Products";
import SignUp from "./Components/SignUp/SignUp";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  console.log("location", location);

  const isNavbarVisible = !["/login", "/signup"].includes(location.pathname);

  return (
    <div className="max-w-7xl w-full bg-white min-h-screen m-auto">
      {isNavbarVisible && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/category/:category"
          element={<CategoryProducts />}
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    fetch("https://e-commerce-backened-4fih.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#d4af33]">
        🛍️ Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center">
        {products.length > 0 ? (
          products.map((data) => {
            return (
              <Link to={`/products/${data.id}`} key={data.id}>
                <Card data={data} />
              </Link>
            );
          })
        ) : (
          <p className="col-span-full text-center text-[#d4af33] text-lg">
            Loading products...
          </p>
        )}
      </div>
    </div>
  );
};
export default Products;

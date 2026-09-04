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
    <div className="min-h-screen w-full bg-gray-100 px-3 py-6 sm:px-5 sm:py-8 md:px-8 lg:px-10">
      {/* ================= HEADER ================= */}

      <div className="text-center mb-7 sm:mb-9 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#d4af33] tracking-wide">
          🛍️ Products
        </h2>

        <div className="w-12 sm:w-16 h-1 bg-[#d4af33] rounded-full mx-auto mt-3" />

        <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-3">
          Explore our latest products
        </p>
      </div>

      {/* ================= PRODUCT GRID ================= */}

      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-4
          gap-3
          sm:gap-4
          md:gap-5
          lg:gap-6
          items-stretch
        "
      >
        {products.length > 0 ? (
          products.map((data) => {
            return (
              <Link
                key={data.id}
                to={`/products/${data.id}`}
                className="
                  w-full
                  min-w-0
                  block
                  group
                "
              >
                <div
                  className="
                    w-full
                    h-full
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                  "
                >
                  <Card data={data} />
                </div>
              </Link>
            );
          })
        ) : (
          <div className="col-span-full min-h-[50vh] flex flex-col items-center justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-[#d4af33]/30 border-t-[#d4af33] rounded-full animate-spin" />

            <p className="mt-4 text-[#d4af33] text-sm sm:text-base font-semibold">
              Loading products...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

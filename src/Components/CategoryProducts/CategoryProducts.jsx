import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link, useNavigate, useParams } from "react-router-dom";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const { category } = useParams();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/login");
    }
  }, [navigate]);

  console.log(category);

  useEffect(() => {
    fetch(
      `https://e-commerce-backened-4fih.onrender.com/categories/${category}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-3 py-6 sm:px-5 md:px-8 lg:px-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center text-[#d4af33] uppercase">
        Category 🛍️ Products
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 items-stretch">
        {products.length > 0 ? (
          products.map((data) => {
            return (
              <Link
                to={`/products/${data.id}`}
                key={data.id}
                className="w-full flex justify-center"
              >
                <div className="w-full max-w-[320px]">
                  <Card data={data} />
                </div>
              </Link>
            );
          })
        ) : (
          <p className="col-span-full text-center text-[#d4af33] text-base sm:text-lg md:text-xl py-20">
            Loading products...
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;

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
      `https://e-commerce-backened-4fih.onrender.com/categories/${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen items-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center text-[#d4af33]">
        CATEGOTRY 🛍️ PRODUCTS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
export default CategoryProducts;

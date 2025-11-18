import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link, useNavigate, useParams } from "react-router-dom";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);

  // const navigate = useNavigate();

  const { categories } = useParams();

  // useEffect(() => {
  //   if (!localStorage.getItem("username")) {
  //     navigate("/login");
  //   }
  // }, [navigate]);
  console.log(categories);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categories}`)
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
        CATEGOTRY 🛍️ Products
      </h2>

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
export default CategoryProducts;

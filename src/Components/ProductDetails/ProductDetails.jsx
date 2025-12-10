import React, { useEffect, useState } from "react";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FaRegStar, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../Card/ReviewCard";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [category, setCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: productDetails,
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    fetch(`https://e-commerce-backened-4fih.onrender.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductDetails(data);
        setCategory(data.category);
        // console.log(data);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      })
      .catch((err) => console.error("Error fetching:", err));
  }, [id]);

  useEffect(() => {
    if (category) {
      fetch(
        `https://e-commerce-backened-4fih.onrender.com/categories/${category}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCategoryProducts(data.products);
          console.log(data);
        });
    }
  }, [category]);

  const status = productDetails?.availabilityStatus?.toLowerCase();

  const stock = status?.includes("low")
    ? "Low Stock"
    : status?.includes("in")
    ? "In Stock"
    : "Out of Stock";

  const bgColor =
    stock === "Low Stock"
      ? "bg-red-500"
      : stock === "In Stock"
      ? "bg-blue-500"
      : "bg-gray-400";

  return (
    <div>
      {productDetails ? (
        <div>
          <div className="flex justify-around gap-2 mt-5 bg-white w-full h-screen ">
            <div className="w-full md:w-[50%]">
              <div className="flex justify-center">
                <div className="w-1/4 md:w-1/4 mt-8">
                  <img
                    src={productDetails?.thumbnail}
                    alt=""
                    className="w-full  bg-white m-auto"
                  />
                </div>
                <div className="w-3/4 md:w-3/4">
                  <div className="">
                    <img
                      src={productDetails?.images?.[0]}
                      alt=""
                      className="w-full max-w-[400px] bg-white border border-[#d5af34] my-2"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-4 mr-15">
                    <button
                      onClick={handleAddProduct}
                      className="bg-[#ff9f00] text-white px-6 py-4 flex justify-center items-center gap-3 rounded-md"
                    >
                      <FaShoppingCart />
                      Add to Cart
                    </button>
                    <button className="bg-[#fb641b] text-white px-10 py-4 flex justify-center items-center gap-3 rounded-md">
                      <BiPurchaseTagAlt />
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%] h-full my-6 md:mt-0 md:flex md:justify-center overflow-visible md:overflow-auto md:scrollbar-hide">
              <div>
                <h3 className="text-[18px]">
                  {productDetails?.title}
                  {productDetails?.description}
                </h3>
                <div className="flex gap-3">
                  <p className="flex items-center gap-1 bg-green-500 text-white w-fit py-1 px-2 rounded-xl text-xs">
                    {productDetails?.rating}
                    <FaRegStar />
                  </p>
                  <p
                    className={`items-center gap-1 text-white w-fit py-1 px-2 rounded-xl text-xs ${bgColor}`}
                  >
                    {stock}
                  </p>
                </div>
                <p className="font-bold text-2xl my-2">
                  ${productDetails?.price}
                </p>
                <p className="bg-pink-300 w-fit text-white px-2 rounded-xl">
                  {productDetails?.tags[0]}
                </p>

                <h2 className="text-xl font-bold my-4">Specification</h2>
                <h4 className="font-semibold">In The Box</h4>
                <p>
                  <span className="text-gray-500">Brand </span>{" "}
                  {productDetails?.brand}
                </p>
                <p>
                  <span className="text-gray-500">Weight </span>
                  {productDetails?.weight}
                </p>
                <h4 className="font-semibold">Dimensions</h4>
                <p>
                  <span className="text-gray-500">Width </span>
                  {productDetails?.dimensions?.width}
                </p>
                <p>
                  <span className="text-gray-500">Height </span>
                  {productDetails?.dimensions?.height}
                </p>
                <p>
                  <span className="text-gray-500">Depth </span>
                  {productDetails?.dimensions?.depth}
                </p>
                <p className="text-gray-500 font-semibold">
                  Warranty{"   "}
                  <span className="text-black font-medium">
                    {productDetails?.warrantyInformation}
                  </span>
                </p>
                <h2 className="text-xl font-bold my-4">Reviews:</h2>
                <ul>
                  {productDetails?.reviews?.map((review, rating) => {
                    return <ReviewCard review={review} rating={rating} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="md:mb-10">
            <div className="text-center">
              <h1 className="text-3xl font-bold my-8 text-[#d4af33]">
                Similar Products
              </h1>
            </div>
            <div>
              <ul className="flex justify-center flex-wrap gap-3">
                {categoryProducts.map((data) => {
                  return (
                    <li>
                      <Link
                        className="flex items-center justify-center"
                        to={`/products/${data?.id}`}
                        key={data?.id}
                      >
                        <Card data={data} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-[#d4af33] font-extrabold text-2xl h-screen">
          Loading product details...
        </p>
      )}
    </div>
  );
};

export default ProductDetails;

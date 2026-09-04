import { useEffect, useState } from "react";
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

  const handleCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: productDetails.id,
        image: productDetails.thumbnail,
        title: productDetails.title,
        qty: 1,
        price: productDetails.price,
      },
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
        setCategory(data.category);

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
        `https://e-commerce-backened-4fih.onrender.com/categories/${category}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setCategoryProducts(data.products);
        })
        .catch((err) => console.error("Error fetching category:", err));
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
    <div className="w-full">
      {productDetails ? (
        <>
          <section className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-5 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              <div className="w-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4">
                  <div className="w-24 sm:w-28 lg:w-24 shrink-0 order-2 sm:order-1">
                    <img
                      src={productDetails?.thumbnail}
                      alt={productDetails?.title}
                      className="w-full h-24 sm:h-28 lg:h-24 object-contain bg-white rounded-lg"
                    />
                  </div>

                  <div className="w-full sm:w-[75%] lg:w-[80%] flex justify-center order-1 sm:order-2">
                    <img
                      src={productDetails?.images?.[0]}
                      alt={productDetails?.title}
                      className="w-full max-w-[500px] h-[280px] sm:h-[350px] lg:h-[450px] object-contain bg-white border border-[#d5af34] rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 mt-5 px-2">
                  <button
                    onClick={handleCart}
                    className="w-full sm:w-auto bg-[#ff9f00] hover:bg-[#ed9200] text-white px-5 py-3 md:px-7 md:py-4 flex justify-center items-center gap-3 rounded-md transition"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>

                  <button className="w-full sm:w-auto bg-[#fb641b] hover:bg-[#e85610] text-white px-5 py-3 md:px-8 md:py-4 flex justify-center items-center gap-3 rounded-md transition">
                    <BiPurchaseTagAlt />
                    Buy Now
                  </button>
                </div>
              </div>

              <div className="w-full px-1 sm:px-2 lg:px-0">
                <div className="max-w-2xl">
                  {/* Title */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
                    {productDetails?.title}
                  </h1>

                  <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
                    {productDetails?.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <p className="flex items-center gap-1 bg-green-500 text-white w-fit py-1 px-3 rounded-xl text-xs sm:text-sm">
                      {productDetails?.rating}
                      <FaRegStar />
                    </p>

                    <p
                      className={`text-white w-fit py-1 px-3 rounded-xl text-xs sm:text-sm ${bgColor}`}
                    >
                      {stock}
                    </p>
                  </div>

                  <p className="font-bold text-2xl sm:text-3xl my-4">
                    ${productDetails?.price}
                  </p>

                  <p className="bg-pink-300 w-fit text-white px-3 py-1 rounded-xl text-sm">
                    {productDetails?.tags?.[0]}
                  </p>

                  <div className="mt-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">
                      Specification
                    </h2>

                    <h4 className="font-semibold mb-2">In The Box</h4>

                    <div className="space-y-2 text-sm sm:text-base">
                      <p>
                        <span className="text-gray-500">Brand: </span>
                        {productDetails?.brand || "N/A"}
                      </p>

                      <p>
                        <span className="text-gray-500">Weight: </span>
                        {productDetails?.weight}
                      </p>
                    </div>

                    <h4 className="font-semibold mt-5 mb-2">Dimensions</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm sm:text-base">
                      <p>
                        <span className="text-gray-500">Width: </span>
                        {productDetails?.dimensions?.width}
                      </p>

                      <p>
                        <span className="text-gray-500">Height: </span>
                        {productDetails?.dimensions?.height}
                      </p>

                      <p>
                        <span className="text-gray-500">Depth: </span>
                        {productDetails?.dimensions?.depth}
                      </p>
                    </div>

                    {/* Warranty */}
                    <p className="text-gray-500 font-semibold mt-4">
                      Warranty:{" "}
                      <span className="text-black font-medium">
                        {productDetails?.warrantyInformation}
                      </span>
                    </p>
                  </div>

                  <div className="mt-7">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">
                      Reviews:
                    </h2>

                    <ul className="space-y-3">
                      {productDetails?.reviews?.map((review, index) => {
                        return (
                          <li key={index}>
                            <ReviewCard review={review} rating={index} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 pb-10">
            <h2 className="text-2xl sm:text-3xl font-bold my-7 sm:my-9 text-[#d4af33] text-center">
              Similar Products
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 justify-items-center">
              {categoryProducts.map((data) => {
                return (
                  <li key={data.id} className="w-full max-w-[300px]">
                    <Link className="block w-full" to={`/products/${data.id}`}>
                      <Card data={data} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      ) : (
        <div className="min-h-screen flex items-center justify-center px-4">
          <p className="text-center text-[#d4af33] font-extrabold text-xl sm:text-2xl">
            Loading product details...
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

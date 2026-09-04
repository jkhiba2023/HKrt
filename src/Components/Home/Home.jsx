import React, { useEffect, useState } from "react";
import img1 from "../../assets/Home1.webp";

import { GiReturnArrow } from "react-icons/gi";
import { IoMdCash } from "react-icons/io";
import { MdAutoAwesome, MdHighQuality } from "react-icons/md";

import Beauty from "../../assets/Beauty.png";
import Fragrances from "../../assets/Fragrances.png";
import Furniture from "../../assets/Furniture.png";
import Groceries from "../../assets/Groceries.png";
import HomeDecoration from "../../assets/HomeDecoration.png";
import KitchenAccessories from "../../assets/KitchenAccessories.png";
import Laptops from "../../assets/Laptops.png";
import MensShirts from "../../assets/MensShirts.png";
import MensShoes from "../../assets/MensShoes.png";
import MensWatches from "../../assets/MensWatches.png";
import MobileAccessories from "../../assets/MobileAccessories.png";
import Motorcycle from "../../assets/Motorcycle.png";
import SkinCare from "../../assets/SkinCare.png";
import Smartphones from "../../assets/Smartphones.png";
import SportsAccessories from "../../assets/SportsAccessories.png";
import Sunglasses from "../../assets/Sunglasses.png";
import Tablets from "../../assets/Tablets.png";
import Tops from "../../assets/Tops.png";
import Vehicle from "../../assets/Vehicle.png";
import WomensBags from "../../assets/WomensBags.png";
import WomensDresses from "../../assets/WomensDresses.png";
import WomensJewellery from "../../assets/WomensJewellery.png";
import WomensShoes from "../../assets/WomensShoes.png";
import WomensWatches from "../../assets/WomensWatches.png";

import { Link } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  const ImgData = {
    Beauty,
    Fragrances,
    Furniture,
    Groceries,
    "Home Decoration": HomeDecoration,
    "Kitchen Accessories": KitchenAccessories,
    Laptops,
    "Mens Shirts": MensShirts,
    "Mens Shoes": MensShoes,
    "Mens Watches": MensWatches,
    "Mobile Accessories": MobileAccessories,
    Motorcycle,
    "Skin Care": SkinCare,
    Smartphones,
    "Sports Accessories": SportsAccessories,
    Sunglasses,
    Tablets,
    Tops,
    Vehicle,
    "Womens Bags": WomensBags,
    "Womens Dresses": WomensDresses,
    "Womens Jewellery": WomensJewellery,
    "Womens Shoes": WomensShoes,
    "Womens Watches": WomensWatches,
  };

  const categoryGroups = [
    {
      title: "Food & Grocery",
      icon: "🍔",
      categories: ["Groceries"],
    },
    {
      title: "Fashion & Clothing",
      icon: "👕",
      categories: [
        "Mens Shirts",
        "Mens Shoes",
        "Mens Watches",
        "Tops",
        "Womens Bags",
        "Womens Dresses",
        "Womens Jewellery",
        "Womens Shoes",
        "Womens Watches",
        "Sunglasses",
      ],
    },
    {
      title: "Beauty & Personal Care",
      icon: "💄",
      categories: ["Beauty", "Fragrances", "Skin Care"],
    },
    {
      title: "Electronics",
      icon: "📱",
      categories: ["Smartphones", "Laptops", "Tablets", "Mobile Accessories"],
    },
    {
      title: "Home & Kitchen",
      icon: "🏠",
      categories: ["Furniture", "Home Decoration", "Kitchen Accessories"],
    },
    {
      title: "Automotive",
      icon: "🏍️",
      categories: ["Motorcycle", "Vehicle"],
    },
    {
      title: "Sports",
      icon: "⚽",
      categories: ["Sports Accessories"],
    },
  ];

  const getCategory = (categoryName) => {
    return categories.find((item) => item.name === categoryName);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 overflow-hidden">
      <div className="w-full">
        <img src={img1} alt="Home" className="w-full h-auto object-cover" />
      </div>

      <div className="w-full bg-amber-200 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-3 sm:px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-center">
              <GiReturnArrow className="text-[#8a6d00] text-xl sm:text-2xl" />

              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700">
                7 Days Easy Return
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-center">
              <IoMdCash className="text-[#8a6d00] text-xl sm:text-2xl" />

              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700">
                Cash on Delivery
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-center">
              <MdAutoAwesome className="text-[#8a6d00] text-xl sm:text-2xl" />

              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700">
                Best Product
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-center">
              <MdHighQuality className="text-[#8a6d00] text-xl sm:text-2xl" />

              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700">
                Best Quality
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-3 sm:px-5 md:px-8 py-8 sm:py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#d4af33]">
            Shop by Category
          </h1>

          <div className="w-16 h-1 bg-[#d4af33] rounded-full mx-auto mt-3" />

          <p className="text-gray-500 text-sm sm:text-base mt-3">
            Explore products from your favourite categories
          </p>
        </div>

        <div className="space-y-10">
          {categoryGroups.map((group) => {
            const groupCategories = group.categories
              .map((name) => getCategory(name))
              .filter(Boolean);

            if (groupCategories.length === 0) {
              return null;
            }

            return (
              <section key={group.title}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl sm:text-3xl">{group.icon}</span>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                    {group.title}
                  </h2>

                  <div className="flex-1 h-px bg-[#d4af33]/40 ml-2" />
                </div>

                {groupCategories.length === 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Product Category */}

                    <div className="flex justify-center">
                      <Link
                        to={`/products/category/${groupCategories[0].slug}`}
                        className="group w-full max-w-[320px] bg-white rounded-2xl shadow-md overflow-hidden p-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="h-[180px] sm:h-[220px] flex items-center justify-center overflow-hidden">
                          <img
                            src={ImgData[groupCategories[0].name]}
                            alt={groupCategories[0].name}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        <p className="text-center mt-3 text-sm sm:text-base font-bold text-gray-700 group-hover:text-[#d4af33]">
                          {groupCategories[0].name}
                        </p>
                      </Link>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-50 via-white to-yellow-100 border border-[#d4af33]/30 p-5 sm:p-7 flex items-center min-h-[260px]">
                      <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#d4af33]/10 rounded-full animate-pulse" />

                      <div className="absolute -left-10 -bottom-10 w-28 h-28 bg-yellow-200/40 rounded-full animate-bounce" />

                      <div className="absolute right-8 top-6 text-3xl sm:text-4xl animate-bounce">
                        ✨
                      </div>

                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-[#d4af33]/10 text-[#a7830f] px-3 py-1 rounded-full text-xs font-bold mb-3">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />

                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                          </span>
                          Fresh Picks
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800 leading-tight">
                          Something
                          <span className="block text-[#d4af33]">
                            Special for You
                          </span>
                        </h3>

                        <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-md leading-relaxed">
                          Discover quality products at prices you'll love. Shop
                          your favourites and find something new today.
                        </p>

                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                          <span className="bg-white shadow-sm px-3 py-2 rounded-full text-[11px] sm:text-xs font-medium text-gray-600">
                            🚚 Fast Delivery
                          </span>

                          <span className="bg-white shadow-sm px-3 py-2 rounded-full text-[11px] sm:text-xs font-medium text-gray-600">
                            🔄 Easy Returns
                          </span>

                          <span className="bg-white shadow-sm px-3 py-2 rounded-full text-[11px] sm:text-xs font-medium text-gray-600">
                            ⭐ Quality Products
                          </span>
                        </div>

                        <p className="mt-5 text-sm font-semibold text-[#a7830f] italic">
                          “Shop smart. Shop with confidence.”
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-md p-3 sm:p-5">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                      {groupCategories.map((data) => (
                        <li
                          key={data.name}
                          className="group bg-gray-50 border border-gray-100 rounded-xl overflow-hidden hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                          <Link
                            to={`/products/category/${data.slug}`}
                            className="block p-3 sm:p-4"
                          >
                            <div className="h-[100px] sm:h-[120px] md:h-[140px] flex items-center justify-center overflow-hidden">
                              <img
                                src={ImgData[data.name]}
                                alt={data.name}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>

                            <p className="text-center mt-2 text-xs sm:text-sm font-bold text-gray-700 group-hover:text-[#d4af33] transition-colors">
                              {data.name}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import PopularProduct from "./PopularProduct";
import product from "../images/product.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product4.jpg";

const MostPopularProducts = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative h-full px-6 py-4 md:py-8 lg:py-16">
      <h2 className="text-4xl py-12 font-bold text-center">
        Most <span className="italic font-bodoni font-medium">Popular</span>{" "}
        Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <PopularProduct img={product} title="Nike " subtitle="AirMax" />
        <PopularProduct img={product2} title="Nike " subtitle="Running" />
        <PopularProduct img={product3} title="Puma" subtitle="Dazed" />
        <PopularProduct img={product4} title="Air" subtitle="Jordan 12" />
      </div>
    </div>
  );
};

export default MostPopularProducts;

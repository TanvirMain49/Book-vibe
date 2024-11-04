import React from "react";
import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero py-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bookImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="lg:text-left text-center">
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <p className="py-6">
          Brighten up your shelf with a mix of classic and modern must-reads! This book gives you fresh recommendations across genres to keep your collection interesting and inspiring. Perfect for readers looking to add some new life to their library.
          </p>
          <button className="btn bg-[#23BE0A] font-bold text-white">View the List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

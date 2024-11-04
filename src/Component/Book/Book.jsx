import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, category, rating, tags } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6 border border-gry-500">
        <figure className="bg-gray-700 p-6 rounded-2xl">
          <img src={image} className="h-[266px]" alt={bookName} />
        </figure>
        <div className="card-body p-0 py-6">
          <div className="card-actions justify-start py-2">
            {tags.map((tag, idx) => (
              <div key={idx} className="badge badge-outline bg-[#41f824ea] text-[#fff] font-bold p-3">
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title font-bold whitespace-nowrap">{bookName}</h2>
          <p className="border-b-2 border-dashed border-gray-600 pb-4">
            By : {author}
          </p>
          <div className="flex justify-between gap-60 pt-4">
            <p>{category}</p>
            <p className="flex gap-2 items-center">
              {rating}
              <CiStar className="text-orange-600 text-2xl" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

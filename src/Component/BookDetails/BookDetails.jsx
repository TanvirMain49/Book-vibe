import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const {
    image,
    bookName,
    author,
    review,
    category,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="hero py-8">
      <div className="flex flex-col lg:flex-row gap-8">
          <img
            src={image}
            className="md:max-h-[764px] md:max-w-[525px] rounded-lg bg-gray-800 p-20 object-cover"
          />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="pt-4">By: {author}</p>
          <div className="border-b-2 border-t-2 border-gray-500 py-2 mt-4">
            {category}
          </div>
          <p className="py-6">{review}</p>

          <div className="flex gap-4 items-center border-b-2 border-gray-500 pb-6">
            <p className="font-bold">Tag </p>
            {tags.map((tag, idx) => (
              <p
                key={idx}
                className="badge badge-outline bg-[#21a10dea] text-[#fff] p-2 text-base"
              >
                #{tag}
              </p>
            ))}
          </div>

          <div className="overflow-x-auto py-6">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Number of Pages:</td>
                  <td className="font-bold">{totalPages}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Publisher</td>
                  <td className="font-bold">{publisher}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Year of Publishing:</td>
                  <td className="font-bold">{yearOfPublishing}</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Rating:</td>
                  <td className="flex items-center gap-2 font-bold">
                    {rating}
                    <div className="rating rating-xs">
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-3">
            <button className="btn px-6 bg-[#23BE0A] text-white font-bold">Read</button>
            <button className="btn px-4 bg-[#23BE0A] text-white font-bold">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

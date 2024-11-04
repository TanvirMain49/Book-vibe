import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishlist } from "../Utility/Utility";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    
    const readBooks = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBooks);
  }, [allBooks]);


  useEffect(()=>{
    const storeWishList = getStoredWishlist();
    const storeWishListInt = storeWishList.map(id => parseInt(id));

    const wishBooks = allBooks.filter(book => storeWishListInt.includes(book.bookId));
    setWishList(wishBooks);

  },[allBooks])

  console.log(wishList)

  return (
    <div>
      <div className="bg-gray-600 rounded-xl my-8">
        <h1 className="text-center text-2xl font-bold p-8">Books</h1>
      </div>
      <div className="flex justify-center items-center pb-8">
        <button className="btn bg-[#23BE0A] text-white font-bold px-6">
          Sort by
        </button>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 py-9">
            {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 py-9">
            {wishList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;

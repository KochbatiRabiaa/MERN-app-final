import React, { useEffect } from "react";
import "./books.css";
import Book from "./book";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooksAction } from "../../redux/actions/bookActions";


const Books = () => {
  const booksList = useSelector((state) => state.booksList);
  const { allBooks } = booksList;
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooksAction());
  }, [dispatch]);

  return (
    
    
    <div className="products">
      {allBooks &&
        allBooks.map((product ) => 
      <Book key={product._id} product={product} />
       )}
    </div>
  
    
  );
};

export default Books;

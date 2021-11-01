import React, { useState } from "react";
import "./search.css";
import {Link} from 'react-router-dom';




function SearchBar({ placeholder, allBooks }) {
const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = allBooks && allBooks.filter((el) => {
      return el.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData && filteredData.length === 0 ? (
            <i className="fas fa-search"></i>
          ) : (
            <i className="far fa-window-close" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData && filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData && filteredData.slice(0,15).map((searchingBook, key) => {
            return (
              <Link className="dataItem" to={`books/${searchingBook._id}`} target="_blank">
                <p>{searchingBook.title} </p>
               
         
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
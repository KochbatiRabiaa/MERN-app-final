import React from "react";
import "./book.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBook } from "../../redux/actions/bookActions";
import { addToCart } from "../../redux/actions/shoppongCartAction";




const Book = ({ product, history}) => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (product !== product._id) {
      dispatch(fetchBook(product._id));
    }
  }, [dispatch, product])

  const addToCartHandler = () => {
    dispatch(addToCart(product._id,null,true));
    history && history.push(`/shoppingCart`);
  };

  return (
    <div className="product">
      <img
        className="product__image"
        src={product.bookCover}
        alt={product.title}
      />

      <div className="product__details">
        <p className="details__title" style={{ fontSize: "40px" }}>
          {product.title}
        </p>
        <p
          className="details__title"
          style={{ fontSize: "25px", textDecoration: "underline" }}
        >
          {" "}
          By :{product.author}
        </p>
        <p className="details__title">{product.category}</p>
        <p className="details__title">Languge : {product.language}</p>
        <p className="details__title">{product.pages} page</p>
        <p className="details__price">${product.price}</p>
      </div>
      <div>
        <p>
          <button
            type="button"
            className="actions__Btn"
            onClick={ ()=> addToCartHandler()}
          >
            Add To Cart
          </button>
        </p>
        

        {/* <Link to={`/books/${product.bookId}`}>
        <button className="btn btn-primary"  style={{"marginTop":"100px"}} >
        View Book
        </button>
                  </Link>*/}
      </div>
    </div>
  );
};

export default Book;

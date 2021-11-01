import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import './bookDetails.css'
// Actions
import { fetchBook } from "../../../redux/actions/bookActions";
import { addToCart } from "../../../redux/actions/shoppongCartAction";

const BookDetails = ({  history, product }) => {
  
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  //const  bookDetails = useSelector((state) => state.bookDetails);
 // const { loading, error, product } =  bookDetails;


  useEffect(() => {
    if (product !== product._id) {
      dispatch(fetchBook(product));}
  }, [dispatch, product])
  
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty,false));
    history.push(`/shoppingCart`);
  };

  return (
    <div className="productscreen">
     {/* {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (*/}
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.bookCover} alt={product.title} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.title}</p>
              <p>Price: ${product.price}</p>
              <p>By: {product.author}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Qty
                <input value={qty} 
                onChange={(e) => setQty(e.target.value)}>
                  
                </input>
              </p>
              <p>
                <button type="button" onClick={() => addToCartHandler()}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      
    </div>
  );
};

export default BookDetails;
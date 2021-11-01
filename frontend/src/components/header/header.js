import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserAction } from '../../redux/actions/userAction';


import './header.css'




const Header = () => {
  const history = useHistory();
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const shop = useSelector(state => state.shop)
  const {products}= shop

  const  userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const {userUpdate}= userUpdateProfile


 

  const getCartCount = () => {
    return products.reduce((sumQty, item) => Number(item.qty) + sumQty, 0);
  };

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUserAction());
    history.push('/');
  };
  return (
    
     <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className="container-fluid">
        <Link className='navbar-brand' to='/'>
         KEYTEB
        </Link>
  
       <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
      </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              {/* Modal  */}

              <button
                type='button'
                className='btn btn-outline-light'
                data-toggle='modal'
                data-target='#about'>
                About
              </button>

              <div
                className='modal fade'
                id='about'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLabel'>
                        who are we AND what we can do for you??
                      </h5>
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div className='modal-body'>
                      <ul className='list-group'>
                       <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          we are a very easy to handle platforme. 
                          If you have old books you wanna sell, this is the right place to go.
                          If you wanna purchace old, antique or rare books, this is the right place.
                          <hr />
                        </li>
                       
                        <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                         and Many more...
                          <hr />
                        </li>
                      </ul>
                    </div>
                    <div className='modal-footer'>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {userInfo ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/books'>
                    Books
                  </Link>
                </li>
             
             </>
            ) : (
           ''
            )}

            {/* Drop dowm */}
            {userInfo ? (
              <div>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                  href='/'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'>
                {userUpdate ? userUpdate.name : userInfo.name}
                 
                </a>
                <div className='dropdown-menu'>
                  <Link className='dropdown-item' to='/profile'>
                    Profile
                  </Link>
                  <div className='dropdown-divider'></div>
                  <button onClick={logoutHandler} className='dropdown-item'>
                    Logout
                  </button>
                </div>
              </li>
              
              </div>
            ) : (
              ''
            )}
          </ul>
       

          <Link to="/shoppingCart">
        <div className="navbar__cart">
          <h3 className="cart__title">Cart</h3>
          <i className="fas fa-shopping-cart"></i>
          
          <div className="cart__counter">{getCartCount()}</div>
        </div>
      </Link>
  

         
    </div>
        </div>
        </nav>
      
    
  );
};


export default Header;
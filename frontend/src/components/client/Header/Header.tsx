import React from "react";
import "../../../assets/main.css";
import { Link } from "react-router-dom";
import UserInfo from "../checkuser/userInfo";
type Props = {};

const Header = (props: Props) => {
  const token = localStorage.getItem("token");
  return (
    <header className="header style7">
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <div className="header-message">Welcome to our online store!</div>
          </div>
          <div className="top-bar-right">
            <div className="header-language">
              <div className="nozari-language nozari-dropdown">
                <a
                  href="#"
                  className="active language-toggle"
                  data-nozari="nozari-dropdown"
                >
                  <span>English (USD)</span>
                </a>
                <ul className="nozari-submenu">
                  <li className="switcher-option">
                    <a href="#">
                      <span>French (EUR)</span>
                    </a>
                  </li>
                  <li className="switcher-option">
                    <a href="#">
                      <span>Japanese (JPY)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="header-user-links flex items-center">
    {token ? (
      <li className="flex items-center">
        <UserInfo />
      </li>
    ) : (
      <li>
        <Link to="/register" className="mr-2">Đăng ký |</Link>
        <Link to="/login" className="mr-2">Đăng nhập</Link>
      </li>
    )}
  </ul>
          </div>
        </div>
      </div>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-right">
            <div className="header-language"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main-header">
          <div className="row">
            <div className="col-lg-3 col-sm-4 col-md-3 col-xs-7 col-ts-12 header-element">
              <div className="logo">
                <a>
                  <img src="/src/assets/images/logo.png" alt="img" />
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-sm-8 col-md-6 col-xs-5 col-ts-12">
              <div className="block-search-block">
                <form className="form-search form-search-width-category">
                  <div className="form-content">
                    <div className="inner">
                      <input
                        type="text"
                        className="input"
                        name="s"
                        value=""
                        placeholder="Search here"
                      />
                    </div>
                    <button className="btn-search" type="submit">
                      <span className="icon-search"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-2 col-sm-12 col-md-3 col-xs-12 col-ts-12">
              <div className="header-control">
                <div className="block-minicart nozari-mini-cart block-header nozari-dropdown">
                  <a
                    href="javascript:void(0);"
                    className="shopcart-icon"
                    data-nozari="nozari-dropdown"
                  >
                    Cart
                    <span className="count"> 0 </span>
                  </a>
                  <div className="shopcart-description nozari-submenu">
                    <div className="content-wrap">
                      <h3 className="title">Shopping Cart</h3>
                      <ul className="minicart-items">
                        <li className="product-cart mini_cart_item">
                          <a href="#" className="product-media">
                            <img
                              src="assets/images/item-minicart-1.jpg"
                              alt="img"
                            />
                          </a>
                          <div className="product-details">
                            <h5 className="product-name">
                              <a href="#">Long Sleeve Midi</a>
                            </h5>
                            <div className="variations">
                              <span className="attribute_color">
                                <a href="#">Black</a>
                              </span>
                              ,
                              <span className="attribute_size">
                                <a href="#">300ml</a>
                              </span>
                            </div>
                            <span className="product-price">
                              <span className="price">
                                <span>$45</span>
                              </span>
                            </span>
                            <span className="product-quantity"> (x1) </span>
                            <div className="product-remove">
                              <a href="#">
                                <i
                                  className="fa fa-trash-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="product-cart mini_cart_item">
                          <a href="#" className="product-media">
                            <img
                              src="/src/assets/images/item-minicart-2.jpg"
                              alt="img"
                            />
                          </a>
                          <div className="product-details">
                            <h5 className="product-name">
                              <a href="#">Soap Shoes Solutions</a>
                            </h5>
                            <div className="variations">
                              <span className="attribute_color">
                                <a href="#">Black</a>
                              </span>
                              ,
                              <span className="attribute_size">
                                <a href="#">300ml</a>
                              </span>
                            </div>
                            <span className="product-price">
                              <span className="price">
                                <span>$45</span>
                              </span>
                            </span>
                            <span className="product-quantity"> (x1) </span>
                            <div className="product-remove">
                              <a href="#">
                                <i
                                  className="fa fa-trash-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="product-cart mini_cart_item">
                          <a href="#" className="product-media">
                            <img
                              src="src/assets/images/item-minicart-3.jpg"
                              alt="img"
                            />
                          </a>
                          <div className="product-details">
                            <h5 className="product-name">
                              <a href="#">Shoes Solutions Soap</a>
                            </h5>
                            <div className="variations">
                              <span className="attribute_color">
                                <a href="#">Black</a>
                              </span>
                              ,
                              <span className="attribute_size">
                                <a href="#">300ml</a>
                              </span>
                            </div>
                            <span className="product-price">
                              <span className="price">
                                <span>$45</span>
                              </span>
                            </span>
                            <span className="product-quantity"> (x1) </span>
                            <div className="product-remove">
                              <a href="#">
                                <i
                                  className="fa fa-trash-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="subtotal">
                        <span className="total-title">Subtotal: </span>
                        <span className="total-price">
                          <span className="Price-amount"> $135 </span>
                        </span>
                      </div>
                      <div className="actions">
                        <a
                          className="button button-viewcart"
                          href="shoppingcart.html"
                        >
                          <span>View Bag</span>
                        </a>
                        <a
                          href="checkout.html"
                          className="button button-checkout"
                        >
                          <span>Checkout</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-account block-header nozari-dropdown">
                  <a href="javascript:void(0);" data-nozari="nozari-dropdown">
                    <span className="flaticon-user"></span>
                  </a>
                  <div className="header-account nozari-submenu">
                    <div className="header-user-form-tabs">
                      <ul className="tab-link">
                        <li className="active">
                          <a
                            data-toggle="tab"
                            aria-expanded="true"
                            href="#header-tab-login"
                          >
                            Login
                          </a>
                        </li>
                        <li>
                          <a
                            data-toggle="tab"
                            aria-expanded="true"
                            href="#header-tab-rigister"
                          >
                            Register
                          </a>
                        </li>
                      </ul>
                      <div className="tab-container">
                        <div id="header-tab-login" className="tab-panel active">
                          <form method="post" className="login form-login">
                            <p className="form-row form-row-wide">
                              <input
                                type="email"
                                placeholder="Email"
                                className="input-text"
                              />
                            </p>
                            <p className="form-row form-row-wide">
                              <input
                                type="password"
                                className="input-text"
                                placeholder="Password"
                              />
                            </p>
                            <p className="form-row">
                              <label className="form-checkbox">
                                <input
                                  type="checkbox"
                                  className="input-checkbox"
                                />
                                <span> Remember me </span>
                              </label>
                              <input
                                type="submit"
                                className="button"
                                value="Login"
                              />
                            </p>
                            <p className="lost_password">
                              <a href="#">Lost your password?</a>
                            </p>
                          </form>
                        </div>
                        <div id="header-tab-rigister" className="tab-panel">
                          <form
                            method="post"
                            className="register form-register"
                          >
                            <p className="form-row form-row-wide">
                              <input
                                type="email"
                                placeholder="Email"
                                className="input-text"
                              />
                            </p>
                            <p className="form-row form-row-wide">
                              <input
                                type="password"
                                className="input-text"
                                placeholder="Password"
                              />
                            </p>
                            <p className="form-row">
                              <input
                                type="submit"
                                className="button"
                                value="Register"
                              />
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="menu-bar mobile-navigation menu-toggle" href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-nav-container rows-space-20">
        <div className="container">
          <div className="header-nav-wapper main-menu-wapper">
            <div className="vertical-wapper block-nav-categori">
              <div className="block-title">
                <span className="icon-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="text">All Categories</span>
              </div>
            </div>
            <div className="header-nav">
              <div className="container-wapper">
                <ul
                  className="nozari-clone-mobile-menu nozari-nav main-menu"
                  id="menu-main-menu"
                >
                  <li className="menu-item menu-item-has-children">
                    <a href="" className="nozari-menu-item-title" title="Home">
                      Home
                    </a>
                  </li>

                  <li className="menu-item menu-item-has-children">
                    <a
                      href="gridproducts.html"
                      className="nozari-menu-item-title"
                      title="Shop"
                    >
                      Shop
                    </a>
                    <span className="toggle-submenu"></span>
                    <ul className="submenu">
                      <li className="menu-item">
                        <a href="gridproducts.html">Grid Fullwidth</a>
                      </li>
                      <li className="menu-item">
                        <a href="gridproducts_leftsidebar.html">
                          Grid Left sidebar
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="gridproducts_bannerslider.html">
                          Grid Bannerslider
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="listproducts.html">List</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children item-megamenu">
                    <a
                      href="#"
                      className="nozari-menu-item-title"
                      title="Pages"
                    >
                      Pages
                    </a>
                    <span className="toggle-submenu"></span>
                    <div className="submenu mega-menu menu-page">
                      <div className="row">
                        <div
                          className="col-xs-12 col-sm-12 col-md-12 col-lg-3 menu-page-item"
                          style={{ width: "50%" }}
                        >
                          <div className="nozari-custommenu default">
                            <h2 className="widgettitle">Shop Pages</h2>
                            <ul className="menu">
                              <li className="menu-item">
                                <a href="shoppingcart.html">Shopping Cart</a>
                              </li>
                              <li className="menu-item">
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li className="menu-item">
                                <a href="contact.html">Contact us</a>
                              </li>
                              <li className="menu-item">
                                <a href="404page.html">404</a>
                              </li>
                              <li className="menu-item">
                                <a href="login.html">Login/Register</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="col-xs-12 col-sm-12 col-md-12 col-lg-3 menu-page-item"
                          style={{ width: "50%" }}
                        >
                          <div className="nozari-custommenu default">
                            <h2 className="widgettitle">Product</h2>
                            <ul className="menu">
                              <li className="menu-item">
                                <a href="productdetails-fullwidth.html">
                                  Product Fullwidth
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="productdetails-leftsidebar.html">
                                  Product left sidebar
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="productdetails-rightsidebar.html">
                                  Product right sidebar
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="col-xs-12 col-sm-12 col-md-12 col-lg-3 menu-page-item"
                          style={{ width: "50%" }}
                        ></div>
                        <div
                          className="col-xs-12 col-sm-12 col-md-12 col-lg-3 menu-page-item"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a
                      href="inblog_right-siderbar.html"
                      className="nozari-menu-item-title"
                      title="Blogs"
                    >
                      Blogs
                    </a>
                    <span className="toggle-submenu"></span>
                    <ul className="submenu">
                      <li className="menu-item menu-item-has-children">
                        <a
                          href="#"
                          className="nozari-menu-item-title"
                          title="Blog Style"
                        >
                          Blog Style
                        </a>
                        <span className="toggle-submenu"></span>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <a
                          href="#"
                          className="nozari-menu-item-title"
                          title="Post Layout"
                        >
                          Post Layout
                        </a>
                        <span className="toggle-submenu"></span>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a
                      href="about.html"
                      className="nozari-menu-item-title"
                      title="About"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-device-mobile">
        <div className="wapper">
          <div className="item mobile-logo">
            <div className="logo">
              <a href="#">
                <img src="assets/images/logo.png" alt="img" />
              </a>
            </div>
          </div>
          <div className="item item mobile-search-box has-sub">
            <a href="#">
              <span className="icon">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </a>
            <div className="block-sub">
              <a href="#" className="close">
                <i className="fa fa-times" aria-hidden="true"></i>
              </a>
              <div className="header-searchform-box">
                <form className="header-searchform">
                  <div className="searchform-wrap">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Enter keywords to search..."
                    />
                    <input
                      type="submit"
                      className="submit button"
                      value="Search"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="item mobile-settings-box has-sub">
            <a href="#">
              <span className="icon">
                <i className="fa fa-cog" aria-hidden="true"></i>
              </span>
            </a>
            <div className="block-sub">
              <a href="#" className="close">
                <i className="fa fa-times" aria-hidden="true"></i>
              </a>
              <div className="block-sub-item">
                <h5 className="block-item-title">Currency</h5>
              </div>
            </div>
          </div>
          <div className="item menu-bar">
            <a className="mobile-navigation menu-toggle" href="#">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-bottom">
      <footer className="footer_v1">
        <div className="top-footer">
          <div className="container container-v1">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="info_footer end">
                  <div className="logo-top">
                    <div
                      className="logosvg m-auto m-lg-0"
                    >
                      <Link to="/">
                        <Image
                          src="https://demo.belgiumwebnet.com/assets/logo/logo2.png"
                          alt="Logo"
                          fluid
                        ></Image>
                      </Link>
                    </div>
                  </div>
                  <p className="mb-0 content_footer">
                    Sophisticated simplicity for the
                    <br />
                    independent mind.
                  </p>
                  <div className="list-icon">
                    <ul className="list-inline list-unstyled mb-0">
                      <li className="list-inline-item">
                      <Link to="/" title target="_blank" className="social-item">
                          <i className="fa fa-twitter" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                      <Link to="/" title target="_blank" className="social-item">
                          <i className="fa fa-dribbble" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                      <Link to="/" title target="_blank" className="social-item">
                          <i className="fa fa-behance" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                      <Link to="/" title target="_blank" className="social-item">
                          <i className="fa fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="info_footer">
                  <div className="title_footer">
                    <h4 className="mb-0 title_border">Help &amp; Infomation</h4>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li>
                       <Link to="/" title="Secateurs">
                        Secateurs
                      </Link>
                    </li>
                    <li>
                       <Link to="/" title="Privacy Policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                       <Link to="/" title="Terms & Conditions">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                       <Link to="/" title="Products Return">
                        Products Return
                      </Link>
                    </li>
                    <li>
                       <Link to="/" title="Wholesale Policy">
                        Wholesale Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="info_footer">
                  <div className="title_footer">
                    <h4 className="mb-0 title_border">About us</h4>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li>
                       <Link to="/" title="Pagination">
                        Pagination
                      </Link>
                    </li>
                    <li>
                       <Link to="/" title="Terms & Conditions">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                       <Link to="/" title="Contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                       <Link to="/" title="Accessories">
                        Accessories
                      </Link>
                    </li>
                    <li>
                       <Link to="/" title="Term of use">
                        Term of use
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="info_footer">
                  <div className="title_footer">
                    <h4 className="mb-0 title_border">Categories</h4>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li>
                       <Link to="/" title="Help Center">
                        Help Center
                      </Link>
                    </li>
                    <li>
                       <Link to="/" title="Home page">
                        Home page
                      </Link>
                    </li>
                    <li>
                       <Link to="/" title="Privacy Policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                       <Link to="/" title="Receivers & Amplifiers">
                        Receivers &amp; Amplifiers
                      </Link>
                    </li>
                    <li>
                       <Link to="/" title="Delivery & Returns">
                        Delivery &amp; Returns
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container container-v1">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6  text-lg-left text-md-left">
                <p className="text-copyright mb-0" />
                <div className="text-copyright mb-0">
                  <p className="mb-0">
                  BelgiumWebNet © 2022 All Rights Reserved. Designed and Developed by: Belgium WebNet
                  </p>
                </div>
                <p />
              </div>
              <div className="col-lg-6 col-md-6 text-end">
                <img
                  src="//cdn.shopify.com/s/files/1/0474/3168/0162/files/Payments3.png?v=1598951811"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";

const MiddleMenu = () => {
  return (
    <div className="bw-middle">
      <div className="top-header">
        <Container>
          <Row>
            <Col md={6} className="no-padding">
              <div className="top_left_content">
                <ul className="list-inline-block pull-left">
                  <li className="tel_top">
                    <a href="tel:+1(646) 992-9024">
                      <img
                        src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/support.svg"
                        alt="Phone Call"
                        className="top_img"
                        width="20px"
                      />
                      <span>(646) 992-9024</span>
                      {/*                            <span class="text">Call or text 24/7</span>*/}
                    </a>
                  </li>
                  <li className="email_second">
                    <a href="mailto:info@belgiumwebnet.com">
                      <img
                        src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/mail.svg"
                        alt="Mail"
                        className="top_img"
                        width="20px"
                      />
                      <span>info@belgiumwebnet.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6} className="no-padding float-right">
              <div className="top_right_content desktop_view_top_head">
                <ul className="list-inline-block pull-right">
                  <li className="login-users">
                    <input defaultValue={0} id="login_ch" type="hidden" />{" "}
                    <a
                      href="https://demo.belgiumwebnet.com/login"
                      className="title12 white link-account"
                    >
                      <img
                        src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/user.svg"
                        alt="User"
                        className="top_img"
                        width="20px"
                      />
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.belgiumwebnet.com/wishlist">
                      <img
                        src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/heart.svg"
                        alt="Wishlist"
                        className="top_img"
                        width="20px"
                      />
                      Wishlist (<span id="wish_count_top">0</span>)
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.belgiumwebnet.com/shopping/cart">
                      <img
                        src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bag.svg"
                        alt="Cart"
                        className="top_img"
                        width="20px"
                      />
                      My Cart (<span id="mini-cart-number">0</span>)
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="top_right_content mobile_view_top_head"
                style={{ display: "none" }}
              >
                <ul className="list-inline-block pull-right">
                  <li>
                    <a href="https://demo.belgiumwebnet.com/wishlist">
                      <img
                        src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/heart.svg"
                        alt="Wishlist"
                        className="top_img"
                        width="20px"
                      />
                      (<span id="wish_count_top">0</span>)
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.belgiumwebnet.com/shopping/cart">
                      <img
                        src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bag.svg"
                        alt="Cart"
                        className="top_img"
                        width="20px"
                      />
                      (0)
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MiddleMenu;

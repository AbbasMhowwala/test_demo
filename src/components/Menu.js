import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
const Menu = () => {
  return (
    <div className="menu-main">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link">
                <Container>
                  <Row>
                    <Col md={3}>
                      <div className="mega-list-cat">
                        <h2 className="title14 font-bold text-uppercase mtb">
                          <a href="https://demo.belgiumwebnet.com/natural-diamonds-search">
                            Loose Diamonds
                          </a>
                        </h2>
                        <ul className="list-none">
                          <li>
                            <a href="https://demo.belgiumwebnet.com/natural-diamonds-search/round">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
                                alt="round"
                                className="img-size1"
                              ></img>
                              Round
                            </a>
                          </li>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/natural-diamonds-search/princess">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
                                alt="princess"
                                className="img-size1"
                              ></img>
                              Princess
                            </a>
                          </li>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/natural-diamonds-search/cushion">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
                                alt="cushion"
                                className="img-size1"
                              ></img>
                              Cushion
                            </a>
                          </li>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/natural-diamonds-search/emerald">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
                                alt="emerald"
                                className="img-size1"
                              ></img>
                              Emerald
                            </a>
                          </li>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/natural-diamonds-search/oval">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
                                alt="oval"
                                className="img-size1"
                              ></img>
                              Oval
                            </a>
                          </li>
                        </ul>
                        <ul className="list-none">
                          <li>
                            <a href="https://demo.belgiumwebnet.com/natural-diamonds-search/radiant">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/rediant.png"
                                alt="radiant"
                                className="img-size1"
                              ></img>
                              Radiant
                            </a>
                          </li>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/natural-diamonds-search/asscher">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/asscher.png"
                                alt="asscher"
                                className="img-size1"
                              ></img>
                              Asscher
                            </a>
                          </li>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/natural-diamonds-search/marquise">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
                                alt="marquise"
                                className="img-size1"
                              ></img>
                              Marquise
                            </a>
                          </li>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/natural-diamonds-search/heart">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/heart.png"
                                alt="heart"
                                className="img-size1"
                              ></img>
                              Heart
                            </a>
                          </li>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/natural-diamonds-search/pear">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
                                alt="pear"
                                className="img-size1"
                              ></img>
                              Pear
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="mega-list-cat">
                        <h2 className="title14 font-bold text-uppercase mtb">
                          Create Your Own Ring
                        </h2>
                        <ul>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/natural-diamonds-search">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                className="img-size"
                                alt="Start With An Earth-Mined Diamond"
                              ></img>
                              Start With An Earth-Mined Diamond
                            </a>
                          </li>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/lab-diamonds-search">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                className="img-size"
                                alt="Start With A Lab-Grown Diamond"
                              ></img>
                              Start With A Lab-Grown Diamond
                            </a>
                          </li>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/build-your-own-ring">
                              <img
                                src="https://demo.belgiumwebnet.com/assets/images/ring-images/jwel.png"
                                className="img-size"
                                alt="Start With A Setting"
                              ></img>
                              Start With A Setting
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="mega-list-cat">
                        <h2 className="title14 font-bold text-uppercase mtb">
                          Learn About
                        </h2>
                        <ul>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/natural-diamonds-search">
                              Diamond Shapes
                            </a>
                          </li>
                          <li>
                            <a href="https://demo.belgiumwebnet.com/lab-diamonds-search">
                              4c's of Diamond
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="mega-list-cat">
                        <img
                          src="https://demo.belgiumwebnet.com/assets/images/menu_img/diamond.jpg"
                          alt="Start With A Setting"
                        ></img>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;

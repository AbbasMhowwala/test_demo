import React, { useState } from "react";
import {
  Offcanvas,
  Button,
  Image,
  Nav,
  Accordion,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { BrowserView, MobileView } from "react-device-detect";

const Menu = () => {
  const options = [
    {
      name: 'start'
    },    
    {
      name: 'top'
    },
    {
      name: 'bottom'
    },
    {
      name: 'end'
    }
  ];
  const [show, setShow] = useState(false);
  const [placement1, setPlacement1] = useState('start');
  const handleClose = () => setShow(false);
  const handleShow = (e) =>{
    setShow(true);
    setPlacement1(e);
  }
  return (
    <div className="demo-menu desktop_menu">
      <BrowserView>
        <Navbar className="primary_nav_wrap">
          <ul className="navbar-right-ul">
            <li className="menu desktop_logo">
              <div className="logo logo1">
                <Nav.Link to="/">
                  <Image
                    src="https://demo.belgiumwebnet.com/assets/logo/logo2.png"
                    alt="Logo"
                    fluid
                  ></Image>
                </Nav.Link>
              </div>
            </li>
            <li className="menu cool_menu1 desktop_menu">
              <Nav.Link to="/" className="first-menu cool_menu">
                Diamonds
              </Nav.Link>
              <div className="dropdown-menu mega-dropdown-menu">
                <Container className="dropdown-body">
                  <div className="content-mega-menu">
                    <Row>
                      <Col
                        md={3}
                        sm={3}
                        className="no-padding border_left_menu"
                      >
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">
                            <Nav.Link>Loose Diamonds</Nav.Link>
                          </h2>
                          <ul className="list-none">
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
                                  alt="round"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Round
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
                                  alt="princess"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Princess
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
                                  alt="cushion"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Cushion
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
                                  alt="emerald"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Emerald
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
                                  alt="oval"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Oval
                              </Nav.Link>
                            </li>
                          </ul>
                          <ul className="list-none">
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/rediant.png"
                                  alt="radiant"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Radiant
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/asscher.png"
                                  alt="asscher"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Asscher
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
                                  alt="marquise"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Marquise
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/heart.png"
                                  alt="heart"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Heart
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
                                  alt="pear"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Pear
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col
                        md={3}
                        sm={3}
                        className="no-padding border_left_menu"
                      >
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">
                            Create Your Own Ring
                          </h2>
                          <ul>
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                  className="img-size"
                                  alt="Start With An Earth-Mined Diamond"
                                  fluid
                                ></Image>
                                Start With An Earth-Mined Diamond
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                  className="img-size"
                                  alt="Start With A Lab-Grown Diamond"
                                  fluid
                                ></Image>
                                Start With A Lab-Grown Diamond
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/ring-images/jwel.png"
                                  className="img-size"
                                  alt="Start With A Setting"
                                  fluid
                                ></Image>
                                Start With A Setting
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col
                        md={2}
                        sm={2}
                        className="no-padding border_left_menu"
                      >
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">Learn About</h2>
                          <ul>
                            <li>
                              <Nav.Link>Diamond Shapes</Nav.Link>
                            </li>
                            <li>
                              <Nav.Link>4C's Of A Diamond</Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={4} sm={5}>
                        <div className="mega-list-cat">
                          <Nav.Link>
                            <Image
                              src="https://demo.belgiumwebnet.com/assets/images/menu_img/diamond.jpg"
                              alt="Custom Diamond Jewelry NYC"
                              fluid
                            ></Image>
                          </Nav.Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            </li>
            <li className="menu cool_menu1 desktop_menu">
              <Nav.Link to="/" className="first-menu cool_menu">
                Gemstones
              </Nav.Link>
              <div className="dropdown-menu mega-dropdown-menu">
                <Container className="dropdown-body">
                  <div className="content-mega-menu">
                    <Row>
                      <Col
                        md={3}
                        sm={3}
                        className="no-padding border_left_menu"
                      >
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">
                            <Nav.Link to="/">Shop By Shape</Nav.Link>
                          </h2>
                          <ul className="list-none">
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
                                  alt="round"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Round
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
                                  alt="princess"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Princess
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
                                  alt="cushion"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Cushion
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
                                  alt="emerald"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Emerald
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
                                  alt="oval"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Oval
                              </Nav.Link>
                            </li>
                          </ul>
                          <ul className="list-none">
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/rediant.png"
                                  alt="radiant"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Radiant
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/asscher.png"
                                  alt="asscher"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Asscher
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
                                  alt="marquise"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Marquise
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/heart.png"
                                  alt="heart"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Heart
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
                                  alt="pear"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Pear
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col
                        md={3}
                        sm={3}
                        className="no-padding border_left_menu"
                      >
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">
                            Create Your Own Ring
                          </h2>
                          <ul>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                  className="img-size"
                                  alt="Start With A Gemstone"
                                  fluid
                                ></Image>
                                Start With A Gemstone
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/ring-images/jwel.png"
                                  className="img-size"
                                  alt="Start With A Setting"
                                  fluid
                                ></Image>
                                Start With A Setting
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-list-cat m-top">
                          <h2 className="text-uppercase mtb">Shop By Color</h2>
                          <ul className="list-none">
                            <li>
                              <Nav.Link to="/" className="blue">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/blue.png"
                                  width="30px"
                                  alt="blue gemstone"
                                  fluid
                                ></Image>
                                Blue
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/" className="red">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/red.png"
                                  width="30px"
                                  alt="red gemstone"
                                  fluid
                                ></Image>
                                Red
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/" className="yellow">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/yellow.png"
                                  width="30px"
                                  alt="yellow gemstone"
                                  fluid
                                ></Image>
                                Yellow
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/" className="pink">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/pink.png"
                                  width="30px"
                                  alt="pink gemstone"
                                  fluid
                                ></Image>
                                Pink
                              </Nav.Link>
                            </li>
                          </ul>
                          <ul className="list-none">
                            <li>
                              <Nav.Link to="/" className="orange">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/orange.png"
                                  width="30px"
                                  alt="orange gemstone"
                                  fluid
                                ></Image>
                                Orange
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/" className="green">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/green.png"
                                  width="30px"
                                  alt="green gemstone"
                                  fluid
                                ></Image>
                                Green
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/" className="purple">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/purple.png"
                                  width="30px"
                                  alt="purple gemstone"
                                  fluid
                                ></Image>
                                Purple
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/" className="multi">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/other.png"
                                  width="30px"
                                  alt="sapphire gemstone"
                                  fluid
                                ></Image>
                                Other
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={3} sm={3} className="no-padding">
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">Gemstone Type</h2>
                          <ul className="list-none">
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_icon/sapphire.png"
                                  className="img-size"
                                  alt="Sapphire"
                                  fluid
                                ></Image>
                                Sapphire
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_icon/ruby.png"
                                  className="img-size"
                                  alt="Ruby"
                                  fluid
                                ></Image>
                                Ruby
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_icon/tanzanite.png"
                                  className="img-size"
                                  alt="Tanzanite"
                                  fluid
                                ></Image>
                                Tanzanite
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_icon/tourmaline.png"
                                  className="img-size"
                                  alt="Tourmaline"
                                  fluid
                                ></Image>
                                Tourmaline
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_icon/emerald.png"
                                  className="img-size"
                                  alt="Emerald"
                                  fluid
                                ></Image>
                                Emerald
                              </Nav.Link>
                            </li>
                          </ul>
                          <ul className="list-none">
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_icon/garnet.png"
                                  className="img-size"
                                  alt="Garnet"
                                  fluid
                                ></Image>
                                Garnet
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_icon/opal.png"
                                  className="img-size"
                                  alt="Opal"
                                  fluid
                                ></Image>
                                Opal
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_icon/aquamarine.png"
                                  className="img-size"
                                  alt="Aquamarine"
                                  fluid
                                ></Image>
                                Aquamarine
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_icon/Spectrolite.png"
                                  className="img-size"
                                  alt="Spectrolite"
                                  fluid
                                ></Image>
                                Spectrolite
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_icon/other2.png"
                                  className="img-size"
                                  alt="Other Gem"
                                  fluid
                                ></Image>
                                Other Gems
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-list-cat m-top d-inline-block">
                          <h2 className="text-uppercase mtb">Learn About</h2>
                          <ul>
                            <li>
                              <Nav.Link to="/">Learn About Gemstones</Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={3}>
                        <Nav.Link to="/">
                          <Image
                            src="https://demo.belgiumwebnet.com/assets/images/menu_img/gemstones.jpg"
                            alt="Gemstone"
                            fluid
                          ></Image>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            </li>
            <li className="menu cool_menu1 desktop_menu">
              <Nav.Link to="/" className="cool_menu">
                Engagement Rings
              </Nav.Link>
              <div className="dropdown-menu mega-dropdown-menu">
                <Container className="dropdown-body">
                  <div className="content-mega-menu">
                    <Row>
                      <Col
                        md={3}
                        sm={3}
                        className="no-padding border_left_menu"
                      >
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">
                            Create Your Own Ring
                          </h2>
                          <ul>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/ring-images/jwel.png"
                                  className="img-size"
                                  alt="Start With A Setting"
                                  fluid
                                ></Image>
                                Start With A Setting
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                  className="img-size"
                                  alt="Start With An Earth-Mined Diamond"
                                  fluid
                                ></Image>
                                Start With An Earth-Mined Diamond
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                  className="img-size"
                                  alt="Start With A Lab-Grown Diamond"
                                  fluid
                                ></Image>
                                Start With A Lab-Grown Diamond
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                  className="img-size"
                                  alt="Start With A Gemstone"
                                  fluid
                                ></Image>
                                Start With A Gemstone
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-list-cat m-top">
                          <h2 className="text-uppercase mtb">Learn About</h2>
                          <ul>
                            <li>
                              <Nav.Link to="/">Ring Types</Nav.Link>
                            </li>
                            <li>
                              <Nav.Link
                                to="https://demo.belgiumwebnet.com/assets/images/eng-ring/Ring-sizing-guide.pdf"
                                target={"_blank"}
                              >
                                Ring Size Guide
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col
                        md={3}
                        sm={3}
                        className="no-padding border_left_menu"
                      >
                        <div className="mega-list-cat">
                          <h2 className=" text-uppercase mtb">Shop By Style</h2>
                          <ul className="list-none">
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/halo.png"
                                  alt="halo"
                                  className="engagement_img"
                                  fluid
                                ></Image>
                                Halo
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/three-stone.png"
                                  alt="three-stone"
                                  className="engagement_img"
                                  fluid
                                ></Image>
                                Three-Stone
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/mutirow-band.png"
                                  alt="Multirow"
                                  className="engagement_img"
                                  fluid
                                ></Image>
                                Multirow
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pave1.png"
                                  alt="Pave"
                                  className="engagement_img"
                                  fluid
                                ></Image>
                                Pave
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/solitaire.png"
                                  alt="Solitaire"
                                  className="engagement_img"
                                  fluid
                                ></Image>
                                Solitaire
                              </Nav.Link>
                            </li>
                          </ul>
                          <ul className="list-none">
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/single-row1.png"
                                  alt="Channel-Set"
                                  className="engagement_img"
                                  fluid
                                ></Image>
                                Channel Set
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/vintage.png"
                                  alt="Vintage"
                                  className="engagement_img"
                                  fluid
                                ></Image>
                                Vintage
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bypass.png"
                                  alt="Bypass"
                                  className="engagement_img"
                                  fluid
                                ></Image>
                                Bypass
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/sidestone.png"
                                  alt="Side-Stone"
                                  className="engagement_img"
                                  fluid
                                ></Image>
                                Side-Stone
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/trellis.png"
                                  alt="Others"
                                  className="engagement_img"
                                  fluid
                                ></Image>
                                Others
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-list-cat m-top">
                          <h2 className="text-uppercase mtb m-top">
                            Shop By Metal
                          </h2>
                          <ul className="list-none">
                            <li>
                              <Nav.Link to="/">
                                <span className="color-con con2"></span>Rose
                                Gold
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <span className="color-con con3"></span>White
                                Gold
                              </Nav.Link>
                            </li>
                          </ul>
                          <ul className="list-none">
                            <li>
                              <Nav.Link to="/">
                                <span className="color-con con4"></span>Yellow
                                Gold
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <span className="color-con con5"></span>Platinum
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={2}>
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">Shop By Shape</h2>
                          <ul className="list1">
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
                                  alt="round"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Round
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
                                  alt="princess"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Princess
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
                                  alt="cushion"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Cushion
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
                                  alt="oval"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Oval
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
                                  alt="emerald"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Emerald
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
                                  alt="marquise"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Marquise
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
                                  alt="pear"
                                  className="img-size1"
                                  fluid
                                ></Image>
                                Pear
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={4}>
                        <Nav.Link to="/">
                          <Image
                            src="https://demo.belgiumwebnet.com/assets/images/menu_img/engagement.jpg"
                            alt="Custom Diamond Engagement Rings NYC"
                            fluid
                          ></Image>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            </li>
            <li className="menu cool_menu1 desktop_menu">
              <Nav.Link to="/" className="cool_menu">
                Wedding Rings
              </Nav.Link>
              <div className="dropdown-menu mega-dropdown-menu">
                <Container className="dropdown-body">
                  <div className="content-mega-menu">
                    <Row>
                      <Col md={2} className="no-padding">
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">Women</h2>
                          <ul className="">
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/anniversary_ring.png"
                                  className="engagement_img"
                                  alt="anniversary_ring"
                                  fluid
                                ></Image>
                                Anniversary
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/channel-set-rings.png"
                                  className="engagement_img"
                                  alt="channel-set-rings"
                                  fluid
                                ></Image>
                                Channel Set
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pave-rings.png"
                                  className="engagement_img"
                                  alt="pave-rings"
                                  fluid
                                ></Image>
                                Pave
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/stackable-rings.png"
                                  className="engagement_img"
                                  alt="stackable-rings"
                                  fluid
                                ></Image>
                                Stackable
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/eternity-ring.png"
                                  className="engagement_img"
                                  alt="eternity-ring"
                                  fluid
                                ></Image>
                                Eternity
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/infinity-rings.png"
                                  className="engagement_img"
                                  alt="infinity-rings"
                                  fluid
                                ></Image>
                                Infinity
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={2} className="no-padding border_left_menu">
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">&nbsp;</h2>
                          <ul className="">
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/plain-metal-rings.png"
                                  className="engagement_img"
                                  alt="plain-metal-rings"
                                  fluid
                                ></Image>
                                Plain Metal
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/curved-rings.png"
                                  className="engagement_img"
                                  alt="curved-rings"
                                  fluid
                                ></Image>
                                Curved
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/fancy-shape-rings.png"
                                  className="engagement_img"
                                  alt="fancy-shape-rings"
                                  fluid
                                ></Image>
                                Fancy Shape
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/wraps-&amp;-inserts-rings.png"
                                  className="engagement_img"
                                  alt="wraps-&amp;-inserts-rings"
                                  fluid
                                ></Image>
                                Wraps &amp; Inserts
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bezel-set-rings.png"
                                  className="engagement_img"
                                  alt="bezel-set-rings"
                                  fluid
                                ></Image>
                                Bezel Set
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bar-set-rings.png"
                                  className="engagement_img"
                                  alt="bar-set-rings"
                                  fluid
                                ></Image>
                                Bar Set
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={2} className="no-padding border_left_menu">
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">men</h2>
                          <ul className="">
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/plain-metal-rings.png"
                                  className="engagement_img"
                                  alt="plain-metal-rings"
                                  fluid
                                ></Image>
                                Artisan Carved Bands
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/curved-rings.png"
                                  className="engagement_img"
                                  alt="curved-rings"
                                  fluid
                                ></Image>
                                Basic Carved
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/fancy-shape-rings.png"
                                  className="engagement_img"
                                  alt="fancy-shape-rings"
                                  fluid
                                ></Image>
                                Basics
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/wraps-&amp;-inserts-rings.png"
                                  className="engagement_img"
                                  alt="wraps-&amp;-inserts-rings"
                                  fluid
                                ></Image>
                                Diamonds
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bezel-set-rings.png"
                                  className="engagement_img"
                                  alt="bezel-set-rings"
                                  fluid
                                ></Image>
                                Hammered Finish
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bar-set-rings.png"
                                  className="engagement_img"
                                  alt="bar-set-rings"
                                  fluid
                                ></Image>
                                Religious and Nationality
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={2} className="no-padding border_left_menu">
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">Shop By Metal</h2>
                          <ul className="list1">
                            <li>
                              <Nav.Link to="/">
                                <span className="color-con con2"></span>Rose
                                Gold
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <span className="color-con con3"></span>White
                                Gold
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <span className="color-con con4"></span>Yellow
                                Gold
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <span className="color-con con5"></span>Platinum
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-list-cat m-top">
                          <h2 className="text-uppercase mtb">Learn About</h2>
                          <ul>
                            <li>
                              <Nav.Link to="/">Ring Types</Nav.Link>
                            </li>
                            <li>
                              <Nav.Link
                                href="https://demo.belgiumwebnet.com/assets/images/eng-ring/Ring-sizing-guide.pdf"
                                target={"_blank"}
                              >
                                Ring Size Guide
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={2}>
                        <Nav.Link to="/">
                          <Image
                            src="https://demo.belgiumwebnet.com/assets/images/menu_img/wedding.jpg"
                            alt="Unique Design Diamond Jewelry NYC"
                            fluid
                          ></Image>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            </li>
            <li className="menu cool_menu1 desktop_menu">
              <Nav.Link to="/" className="cool_menu">
                Fine jewelry
              </Nav.Link>
              <div className="dropdown-menu mega-dropdown-menu">
                <Container className="dropdown-body">
                  <div className="content-mega-menu">
                    <Row>
                      <Col md={2} className="no-padding border_left_menu">
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">Shop By Type</h2>
                          <ul className="l">
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/ring.svg"
                                  alt="Diamond Rings NYC"
                                  className="img-fit-size"
                                  fluid
                                ></Image>
                                Rings
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/nack.svg"
                                  alt="Diamond Necklaces NYC"
                                  className="img-fit-size"
                                  fluid
                                ></Image>
                                Pendants
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/necklace.svg"
                                  alt="Custom Diamond Necklace NYC"
                                  className="img-fit-size"
                                  fluid
                                ></Image>
                                Necklaces
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/brace.svg"
                                  alt="Diamond Bracelet NYC"
                                  className="img-fit-size"
                                  fluid
                                ></Image>
                                Bracelets
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/earings.svg"
                                  alt="Diamond Earings NYC"
                                  className="img-fit-size"
                                  fluid
                                ></Image>
                                Earrings
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={2} className="no-padding border_left_menu">
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">Shop By Metal</h2>
                          <ul className="">
                            <li>
                              <Nav.Link to="/">
                                <span className="color-con con2"></span>Rose
                                Gold
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <span className="color-con con3"></span>White
                                Gold
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <span className="color-con con4"></span>Yellow
                                Gold
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link to="/">
                                <span className="color-con con5"></span>Platinum
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={2}>
                        <div className="mega-list-cat">
                          <h2 className="text-uppercase mtb">Learn About</h2>
                          <ul>
                            <li>
                              <Nav.Link to="/">Your Jewelry</Nav.Link>
                            </li>
                            <li>
                              <Nav.Link
                                href="https://demo.belgiumwebnet.com/assets/images/eng-ring/Ring-sizing-guide.pdf"
                                target={"_blank"}
                              >
                                Ring Size Guide
                              </Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={6}>
                        <Nav.Link to="/">
                          <Image
                            src="https://demo.belgiumwebnet.com/assets/images/menu_img/finejewelry.jpg"
                            alt="Fine Jewelry"
                            fluid
                          ></Image>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            </li>
            <li className="menu cool_menu1 desktop_menu">
              <Nav.Link to="/">Custom Design</Nav.Link>
            </li>
          </ul>
        </Navbar>
      </BrowserView>
      <MobileView>
      <Navbar className="mobile-menu">
        <div className="logo logo1">
          <Nav.Link to="/">
            <Image
              src="https://demo.belgiumwebnet.com/assets/logo/logo2.png"
              alt="Logo"
              fluid
            ></Image>
          </Nav.Link>
        </div>
        {options?.map((e) => (
        <Button variant="primary" onClick={()=>handleShow(e.name)}> 
          {e.name}
        </Button>
        ))}
        <Offcanvas show={show} placement={placement1} onHide={handleClose} >
          <Offcanvas.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Diamonds</Accordion.Header>
                <Accordion.Body>
                  <div className="mobilemenu">
                    <Container className="mobilemenubody">
                      <div className="content-mega-menu">
                        <Row>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">
                                <Nav.Link to="/">Shop By Shape</Nav.Link>
                              </h2>
                              <ul className="list-none">
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
                                      alt="round"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Round
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
                                      alt="princess"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Princess
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
                                      alt="cushion"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Cushion
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
                                      alt="emerald"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Emerald
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
                                      alt="oval"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Oval
                                  </Nav.Link>
                                </li>
                              </ul>
                              <ul className="list-none">
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/rediant.png"
                                      alt="radiant"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Radiant
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/asscher.png"
                                      alt="asscher"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Asscher
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
                                      alt="marquise"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Marquise
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/heart.png"
                                      alt="heart"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Heart
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
                                      alt="pear"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Pear
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">
                                Create Your Own Ring
                              </h2>
                              <ul>
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                      className="img-size"
                                      alt="Start With An Earth-Mined Diamond"
                                      fluid
                                    ></Image>
                                    Start With An Earth-Mined Diamond
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                      className="img-size"
                                      alt="Start With A Lab-Grown Diamond"
                                      fluid
                                    ></Image>
                                    Start With A Lab-Grown Diamond
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/ring-images/jwel.png"
                                      className="img-size"
                                      alt="Start With A Setting"
                                      fluid
                                    ></Image>
                                    Start With A Setting
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">
                                Learn About
                              </h2>
                              <ul>
                                <li>
                                  <Nav.Link>Diamond Shapes</Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link>4C's Of A Diamond</Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <Nav.Link>
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/menu_img/diamond.jpg"
                                  alt="Custom Diamond Jewelry NYC"
                                  fluid
                                ></Image>
                              </Nav.Link>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Container>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Gemstone</Accordion.Header>
                <Accordion.Body>
                  <div className="mobilemenu">
                    <Container className="mobilemenubody">
                      <div className="content-mega-menu">
                        <Row>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">
                                <Nav.Link>Loose Diamonds</Nav.Link>
                              </h2>
                              <ul className="list-none">
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
                                      alt="round"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Round
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
                                      alt="princess"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Princess
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
                                      alt="cushion"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Cushion
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
                                      alt="emerald"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Emerald
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
                                      alt="oval"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Oval
                                  </Nav.Link>
                                </li>
                              </ul>
                              <ul className="list-none">
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/rediant.png"
                                      alt="radiant"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Radiant
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/asscher.png"
                                      alt="asscher"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Asscher
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
                                      alt="marquise"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Marquise
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/heart.png"
                                      alt="heart"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Heart
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link>
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
                                      alt="pear"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Pear
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">
                                Create Your Own Ring
                              </h2>
                              <ul>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                      className="img-size"
                                      alt="Start With A Gemstone"
                                      fluid
                                    ></Image>
                                    Start With A Gemstone
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/ring-images/jwel.png"
                                      className="img-size"
                                      alt="Start With A Setting"
                                      fluid
                                    ></Image>
                                    Start With A Setting
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-list-cat m-top">
                              <h2 className="text-uppercase mtb">
                                Shop By Color
                              </h2>
                              <ul className="list-none">
                                <li>
                                  <Nav.Link to="/" className="blue">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/blue.png"
                                      width="30px"
                                      alt="blue gemstone"
                                      fluid
                                    ></Image>
                                    Blue
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/" className="red">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/red.png"
                                      width="30px"
                                      alt="red gemstone"
                                      fluid
                                    ></Image>
                                    Red
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/" className="yellow">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/yellow.png"
                                      width="30px"
                                      alt="yellow gemstone"
                                      fluid
                                    ></Image>
                                    Yellow
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/" className="pink">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/pink.png"
                                      width="30px"
                                      alt="pink gemstone"
                                      fluid
                                    ></Image>
                                    Pink
                                  </Nav.Link>
                                </li>
                              </ul>
                              <ul className="list-none">
                                <li>
                                  <Nav.Link to="/" className="orange">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/orange.png"
                                      width="30px"
                                      alt="orange gemstone"
                                      fluid
                                    ></Image>
                                    Orange
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/" className="green">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/green.png"
                                      width="30px"
                                      alt="green gemstone"
                                      fluid
                                    ></Image>
                                    Green
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/" className="purple">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/purple.png"
                                      width="30px"
                                      alt="purple gemstone"
                                      fluid
                                    ></Image>
                                    Purple
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/" className="multi">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/other.png"
                                      width="30px"
                                      alt="sapphire gemstone"
                                      fluid
                                    ></Image>
                                    Other
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">
                                Gemstone Type
                              </h2>
                              <ul className="list-none">
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_icon/sapphire.png"
                                      className="img-size"
                                      alt="Sapphire"
                                      fluid
                                    ></Image>
                                    Sapphire
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_icon/ruby.png"
                                      className="img-size"
                                      alt="Ruby"
                                      fluid
                                    ></Image>
                                    Ruby
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_icon/tanzanite.png"
                                      className="img-size"
                                      alt="Tanzanite"
                                      fluid
                                    ></Image>
                                    Tanzanite
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_icon/tourmaline.png"
                                      className="img-size"
                                      alt="Tourmaline"
                                      fluid
                                    ></Image>
                                    Tourmaline
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_icon/emerald.png"
                                      className="img-size"
                                      alt="Emerald"
                                      fluid
                                    ></Image>
                                    Emerald
                                  </Nav.Link>
                                </li>
                              </ul>
                              <ul className="list-none">
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_icon/garnet.png"
                                      className="img-size"
                                      alt="Garnet"
                                      fluid
                                    ></Image>
                                    Garnet
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_icon/opal.png"
                                      className="img-size"
                                      alt="Opal"
                                      fluid
                                    ></Image>
                                    Opal
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_icon/aquamarine.png"
                                      className="img-size"
                                      alt="Aquamarine"
                                      fluid
                                    ></Image>
                                    Aquamarine
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_icon/Spectrolite.png"
                                      className="img-size"
                                      alt="Spectrolite"
                                      fluid
                                    ></Image>
                                    Spectrolite
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_icon/other2.png"
                                      className="img-size"
                                      alt="Other Gem"
                                      fluid
                                    ></Image>
                                    Other Gems
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-list-cat m-top d-inline-block">
                              <h2 className="text-uppercase mtb">
                                Learn About
                              </h2>
                              <ul>
                                <li>
                                  <Nav.Link to="/">
                                    Learn About Gemstones
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/menu_img/gemstones.jpg"
                                  alt="Gemstone"
                                  fluid
                                ></Image>
                              </Nav.Link>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Container>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Engagement Ring</Accordion.Header>
                <Accordion.Body>
                  <div className="mobilemenu">
                    <Container className="mobilemenubody">
                      <div className="content-mega-menu">
                        <Row>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">
                                Create Your Own Ring
                              </h2>
                              <ul>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/ring-images/jwel.png"
                                      className="img-size"
                                      alt="Start With A Setting"
                                      fluid
                                    ></Image>
                                    Start With A Setting
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                      className="img-size"
                                      alt="Start With An Earth-Mined Diamond"
                                      fluid
                                    ></Image>
                                    Start With An Earth-Mined Diamond
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                      className="img-size"
                                      alt="Start With A Lab-Grown Diamond"
                                      fluid
                                    ></Image>
                                    Start With A Lab-Grown Diamond
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                                      className="img-size"
                                      alt="Start With A Gemstone"
                                      fluid
                                    ></Image>
                                    Start With A Gemstone
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-list-cat m-top">
                              <h2 className="text-uppercase mtb">
                                Learn About
                              </h2>
                              <ul>
                                <li>
                                  <Nav.Link to="/">Ring Types</Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link
                                    to="https://demo.belgiumwebnet.com/assets/images/eng-ring/Ring-sizing-guide.pdf"
                                    target={"_blank"}
                                  >
                                    Ring Size Guide
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className=" text-uppercase mtb">
                                Shop By Style
                              </h2>
                              <ul className="list-none">
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/halo.png"
                                      alt="halo"
                                      className="engagement_img"
                                      fluid
                                    ></Image>
                                    Halo
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/three-stone.png"
                                      alt="three-stone"
                                      className="engagement_img"
                                      fluid
                                    ></Image>
                                    Three-Stone
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/mutirow-band.png"
                                      alt="Multirow"
                                      className="engagement_img"
                                      fluid
                                    ></Image>
                                    Multirow
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pave1.png"
                                      alt="Pave"
                                      className="engagement_img"
                                      fluid
                                    ></Image>
                                    Pave
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/solitaire.png"
                                      alt="Solitaire"
                                      className="engagement_img"
                                      fluid
                                    ></Image>
                                    Solitaire
                                  </Nav.Link>
                                </li>
                              </ul>
                              <ul className="list-none">
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/single-row1.png"
                                      alt="Channel-Set"
                                      className="engagement_img"
                                      fluid
                                    ></Image>
                                    Channel Set
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/vintage.png"
                                      alt="Vintage"
                                      className="engagement_img"
                                      fluid
                                    ></Image>
                                    Vintage
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bypass.png"
                                      alt="Bypass"
                                      className="engagement_img"
                                      fluid
                                    ></Image>
                                    Bypass
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/sidestone.png"
                                      alt="Side-Stone"
                                      className="engagement_img"
                                      fluid
                                    ></Image>
                                    Side-Stone
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/trellis.png"
                                      alt="Others"
                                      className="engagement_img"
                                      fluid
                                    ></Image>
                                    Others
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-list-cat m-top">
                              <h2 className="text-uppercase mtb m-top">
                                Shop By Metal
                              </h2>
                              <ul className="list-none">
                                <li>
                                  <Nav.Link to="/">
                                    <span className="color-con con2"></span>Rose
                                    Gold
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <span className="color-con con3"></span>
                                    White Gold
                                  </Nav.Link>
                                </li>
                              </ul>
                              <ul className="list-none">
                                <li>
                                  <Nav.Link to="/">
                                    <span className="color-con con4"></span>
                                    Yellow Gold
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <span className="color-con con5"></span>
                                    Platinum
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">
                                Shop By Shape
                              </h2>
                              <ul className="list1">
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
                                      alt="round"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Round
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
                                      alt="princess"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Princess
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
                                      alt="cushion"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Cushion
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
                                      alt="oval"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Oval
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
                                      alt="emerald"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Emerald
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
                                      alt="marquise"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Marquise
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
                                      alt="pear"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Pear
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/menu_img/engagement.jpg"
                                  alt="Custom Diamond Engagement Rings NYC"
                                  fluid
                                ></Image>
                              </Nav.Link>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Container>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Wedding Rings & Bands</Accordion.Header>
                <Accordion.Body>
                  <div className="mobilemenu">
                    <Container className="mobilemenubody">
                      <div className="content-mega-menu">
                        <Row>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">Women</h2>
                              <ul className="">
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/anniversary_ring.png"
                                      className="engagement_img"
                                      alt="anniversary_ring"
                                      fluid
                                    ></Image>
                                    Anniversary
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/channel-set-rings.png"
                                      className="engagement_img"
                                      alt="channel-set-rings"
                                      fluid
                                    ></Image>
                                    Channel Set
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pave-rings.png"
                                      className="engagement_img"
                                      alt="pave-rings"
                                      fluid
                                    ></Image>
                                    Pave
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/stackable-rings.png"
                                      className="engagement_img"
                                      alt="stackable-rings"
                                      fluid
                                    ></Image>
                                    Stackable
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/eternity-ring.png"
                                      className="engagement_img"
                                      alt="eternity-ring"
                                      fluid
                                    ></Image>
                                    Eternity
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/infinity-rings.png"
                                      className="engagement_img"
                                      alt="infinity-rings"
                                      fluid
                                    ></Image>
                                    Infinity
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <ul className="">
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/plain-metal-rings.png"
                                      className="engagement_img"
                                      alt="plain-metal-rings"
                                      fluid
                                    ></Image>
                                    Plain Metal
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/curved-rings.png"
                                      className="engagement_img"
                                      alt="curved-rings"
                                      fluid
                                    ></Image>
                                    Curved
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/fancy-shape-rings.png"
                                      className="engagement_img"
                                      alt="fancy-shape-rings"
                                      fluid
                                    ></Image>
                                    Fancy Shape
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/wraps-&amp;-inserts-rings.png"
                                      className="engagement_img"
                                      alt="wraps-&amp;-inserts-rings"
                                      fluid
                                    ></Image>
                                    Wraps &amp; Inserts
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bezel-set-rings.png"
                                      className="engagement_img"
                                      alt="bezel-set-rings"
                                      fluid
                                    ></Image>
                                    Bezel Set
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bar-set-rings.png"
                                      className="engagement_img"
                                      alt="bar-set-rings"
                                      fluid
                                    ></Image>
                                    Bar Set
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">
                                Shop By Shape
                              </h2>
                              <ul className="list1">
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
                                      alt="round"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Round
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
                                      alt="princess"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Princess
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
                                      alt="cushion"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Cushion
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
                                      alt="oval"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Oval
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
                                      alt="emerald"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Emerald
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
                                      alt="marquise"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Marquise
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
                                      alt="pear"
                                      className="img-size1"
                                      fluid
                                    ></Image>
                                    Pear
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">men</h2>
                              <ul className="">
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/plain-metal-rings.png"
                                      className="engagement_img"
                                      alt="plain-metal-rings"
                                      fluid
                                    ></Image>
                                    Artisan Carved Bands
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/curved-rings.png"
                                      className="engagement_img"
                                      alt="curved-rings"
                                      fluid
                                    ></Image>
                                    Basic Carved
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/fancy-shape-rings.png"
                                      className="engagement_img"
                                      alt="fancy-shape-rings"
                                      fluid
                                    ></Image>
                                    Basics
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/wraps-&amp;-inserts-rings.png"
                                      className="engagement_img"
                                      alt="wraps-&amp;-inserts-rings"
                                      fluid
                                    ></Image>
                                    Diamonds
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bezel-set-rings.png"
                                      className="engagement_img"
                                      alt="bezel-set-rings"
                                      fluid
                                    ></Image>
                                    Hammered Finish
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bar-set-rings.png"
                                      className="engagement_img"
                                      alt="bar-set-rings"
                                      fluid
                                    ></Image>
                                    Religious and Nationality
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-list-cat m-top">
                              <h2 className="text-uppercase mtb">
                                Learn About
                              </h2>
                              <ul>
                                <li>
                                  <Nav.Link to="/">Ring Types</Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link
                                    href="https://demo.belgiumwebnet.com/assets/images/eng-ring/Ring-sizing-guide.pdf"
                                    target={"_blank"}
                                  >
                                    Ring Size Guide
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/menu_img/wedding.jpg"
                                  alt="Unique Design Diamond Jewelry NYC"
                                  fluid
                                ></Image>
                              </Nav.Link>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Container>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Fine Jewelry</Accordion.Header>
                <Accordion.Body>
                  <div className="mobilemenu">
                    <Container className="mobilemenubody">
                      <div className="content-mega-menu">
                        <Row>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">
                                Shop By Type
                              </h2>
                              <ul className="l">
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/ring.svg"
                                      alt="Diamond Rings NYC"
                                      className="img-fit-size"
                                      fluid
                                    ></Image>
                                    Rings
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/nack.svg"
                                      alt="Diamond Necklaces NYC"
                                      className="img-fit-size"
                                      fluid
                                    ></Image>
                                    Pendants
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/necklace.svg"
                                      alt="Custom Diamond Necklace NYC"
                                      className="img-fit-size"
                                      fluid
                                    ></Image>
                                    Necklaces
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/brace.svg"
                                      alt="Diamond Bracelet NYC"
                                      className="img-fit-size"
                                      fluid
                                    ></Image>
                                    Bracelets
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <Image
                                      src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/earings.svg"
                                      alt="Diamond Earings NYC"
                                      className="img-fit-size"
                                      fluid
                                    ></Image>
                                    Earrings
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">
                                Shop By Metal
                              </h2>
                              <ul className="">
                                <li>
                                  <Nav.Link to="/">
                                    <span className="color-con con2"></span>Rose
                                    Gold
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <span className="color-con con3"></span>
                                    White Gold
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <span className="color-con con4"></span>
                                    Yellow Gold
                                  </Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link to="/">
                                    <span className="color-con con5"></span>
                                    Platinum
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <h2 className="text-uppercase mtb">
                                Learn About
                              </h2>
                              <ul>
                                <li>
                                  <Nav.Link to="/">Your Jewelry</Nav.Link>
                                </li>
                                <li>
                                  <Nav.Link
                                    href="https://demo.belgiumwebnet.com/assets/images/eng-ring/Ring-sizing-guide.pdf"
                                    target={"_blank"}
                                  >
                                    Ring Size Guide
                                  </Nav.Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="mega-list-cat">
                              <Nav.Link to="/">
                                <Image
                                  src="https://demo.belgiumwebnet.com/assets/images/menu_img/finejewelry.jpg"
                                  alt="Fine Jewelry"
                                  fluid
                                ></Image>
                              </Nav.Link>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Container>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
      </MobileView>
    </div>
  );
};

export default Menu;

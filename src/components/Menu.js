// import React, { useState } from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { Container, Row, Col } from "react-bootstrap";
// import { Dropdown } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// const Menu = () => {
//   const [showDiamondDropdown, setDiamondShowDropdown] = useState(false);
//   const [showErDropdown, setErShowDropdown] = useState(false);
//   const [showWeddingDropdown, setWrShowDropdown] = useState(false);
//   const [showFineDropdown, setFjShowDropdown] = useState(false);
//   return (
//     <div className="menu-main">
//       <Navbar expand="lg">
//         <Container>
//           <Navbar.Brand to="#">
//             <div className="logo logo1">
//               <a to="https://demo.belgiumwebnet.com/">
//                 <img
//                   src="https://demo.belgiumwebnet.com/assets/logo/logo2.png"
//                   alt="Logo"
//                 ></img>
//               </a>
//             </div>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav className="my-2 my-lg-0" navbarScroll>
//               <Dropdown
//                 onMouseLeave={() => setDiamondShowDropdown(false)}
//                 onMouseOver={() => setDiamondShowDropdown(true)}
//               >
//                 <Dropdown.Toggle className="main-style" id="dropdown-basic">
//                   Diamonds
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu show={showDiamondDropdown}>
//                   <Container>
//                     <Row>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <h2 className="title14 font-bold text-uppercase mtb">
//                             <a to="https://demo.belgiumwebnet.com/natural-diamonds-search">
//                               Loose Diamonds
//                             </a>
//                           </h2>
//                           <ul className="list-none">
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/round">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
//                                   alt="round"
//                                   className="img-size1"
//                                 ></img>
//                                 Round
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/princess">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
//                                   alt="princess"
//                                   className="img-size1"
//                                 ></img>
//                                 Princess
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/cushion">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
//                                   alt="cushion"
//                                   className="img-size1"
//                                 ></img>
//                                 Cushion
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/emerald">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
//                                   alt="emerald"
//                                   className="img-size1"
//                                 ></img>
//                                 Emerald
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/oval">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
//                                   alt="oval"
//                                   className="img-size1"
//                                 ></img>
//                                 Oval
//                               </a>
//                             </li>
//                           </ul>
//                           <ul className="list-none">
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/radiant">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/rediant.png"
//                                   alt="radiant"
//                                   className="img-size1"
//                                 ></img>
//                                 Radiant
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/asscher">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/asscher.png"
//                                   alt="asscher"
//                                   className="img-size1"
//                                 ></img>
//                                 Asscher
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/marquise">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
//                                   alt="marquise"
//                                   className="img-size1"
//                                 ></img>
//                                 Marquise
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/heart">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/heart.png"
//                                   alt="heart"
//                                   className="img-size1"
//                                 ></img>
//                                 Heart
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/pear">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
//                                   alt="pear"
//                                   className="img-size1"
//                                 ></img>
//                                 Pear
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </Col>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <h2 className="title14 font-bold text-uppercase mtb">
//                             Create Your Own Ring
//                           </h2>
//                           <ul>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
//                                   className="img-size"
//                                   alt="Start With An Earth-Mined Diamond"
//                                 ></img>
//                                 Start With An Earth-Mined Diamond
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/lab-diamonds-search">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
//                                   className="img-size"
//                                   alt="Start With A Lab-Grown Diamond"
//                                 ></img>
//                                 Start With A Lab-Grown Diamond
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/build-your-own-ring">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/ring-images/jwel.png"
//                                   className="img-size"
//                                   alt="Start With A Setting"
//                                 ></img>
//                                 Start With A Setting
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </Col>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <h2 className="title14 font-bold text-uppercase mtb">
//                             Learn About
//                           </h2>
//                           <ul>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search">
//                                 Diamond Shapes
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/lab-diamonds-search">
//                                 4c's of Diamond
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </Col>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <img
//                             src="https://demo.belgiumwebnet.com/assets/images/menu_img/diamond.jpg"
//                             alt="Start With A Setting"
//                           ></img>
//                         </div>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Dropdown.Menu>
//               </Dropdown>
//               <Dropdown
//                 onMouseLeave={() => setErShowDropdown(false)}
//                 onMouseOver={() => setErShowDropdown(true)}
//               >
//                 <Dropdown.Toggle className="main-style" id="dropdown-basic">
//                   Engagement Rings
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu show={showErDropdown}>
//                   <Container>
//                     <Row>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <h2 className="title14 font-bold text-uppercase mtb">
//                             <a to="https://demo.belgiumwebnet.com/natural-diamonds-search">
//                               Engagement Rings
//                             </a>
//                           </h2>
//                           <ul className="list-none">
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/round">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
//                                   alt="round"
//                                   className="img-size1"
//                                 ></img>
//                                 Round
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/princess">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
//                                   alt="princess"
//                                   className="img-size1"
//                                 ></img>
//                                 Princess
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/cushion">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
//                                   alt="cushion"
//                                   className="img-size1"
//                                 ></img>
//                                 Cushion
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/emerald">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
//                                   alt="emerald"
//                                   className="img-size1"
//                                 ></img>
//                                 Emerald
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/oval">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
//                                   alt="oval"
//                                   className="img-size1"
//                                 ></img>
//                                 Oval
//                               </a>
//                             </li>
//                           </ul>
//                           <ul className="list-none">
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/radiant">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/rediant.png"
//                                   alt="radiant"
//                                   className="img-size1"
//                                 ></img>
//                                 Radiant
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/asscher">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/asscher.png"
//                                   alt="asscher"
//                                   className="img-size1"
//                                 ></img>
//                                 Asscher
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/marquise">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
//                                   alt="marquise"
//                                   className="img-size1"
//                                 ></img>
//                                 Marquise
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/heart">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/heart.png"
//                                   alt="heart"
//                                   className="img-size1"
//                                 ></img>
//                                 Heart
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/pear">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
//                                   alt="pear"
//                                   className="img-size1"
//                                 ></img>
//                                 Pear
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </Col>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <h2 className="title14 font-bold text-uppercase mtb">
//                             Create Your Own Ring
//                           </h2>
//                           <ul>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
//                                   className="img-size"
//                                   alt="Start With An Earth-Mined Diamond"
//                                 ></img>
//                                 Start With An Earth-Mined Diamond
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/lab-diamonds-search">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
//                                   className="img-size"
//                                   alt="Start With A Lab-Grown Diamond"
//                                 ></img>
//                                 Start With A Lab-Grown Diamond
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/build-your-own-ring">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/ring-images/jwel.png"
//                                   className="img-size"
//                                   alt="Start With A Setting"
//                                 ></img>
//                                 Start With A Setting
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </Col>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <h2 className="title14 font-bold text-uppercase mtb">
//                             Learn About
//                           </h2>
//                           <ul>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search">
//                                 Diamond Shapes
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/lab-diamonds-search">
//                                 4c's of Diamond
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </Col>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <img
//                             src="https://demo.belgiumwebnet.com/assets/images/menu_img/diamond.jpg"
//                             alt="Start With A Setting"
//                           ></img>
//                         </div>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Dropdown.Menu>
//               </Dropdown>
//               <Dropdown
//                 onMouseLeave={() => setWrShowDropdown(false)}
//                 onMouseOver={() => setWrShowDropdown(true)}
//               >
//                 <Dropdown.Toggle className="main-style" id="dropdown-basic">
//                   Wedding Rings
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu show={showWeddingDropdown}>
//                   <Container>
//                     <Row>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <h2 className="title14 font-bold text-uppercase mtb">
//                             <a to="https://demo.belgiumwebnet.com/natural-diamonds-search">
//                               Wedding Rings
//                             </a>
//                           </h2>
//                           <ul className="list-none">
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/round">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
//                                   alt="round"
//                                   className="img-size1"
//                                 ></img>
//                                 Round
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/princess">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
//                                   alt="princess"
//                                   className="img-size1"
//                                 ></img>
//                                 Princess
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/cushion">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
//                                   alt="cushion"
//                                   className="img-size1"
//                                 ></img>
//                                 Cushion
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/emerald">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
//                                   alt="emerald"
//                                   className="img-size1"
//                                 ></img>
//                                 Emerald
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/oval">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
//                                   alt="oval"
//                                   className="img-size1"
//                                 ></img>
//                                 Oval
//                               </a>
//                             </li>
//                           </ul>
//                           <ul className="list-none">
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/radiant">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/rediant.png"
//                                   alt="radiant"
//                                   className="img-size1"
//                                 ></img>
//                                 Radiant
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/asscher">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/asscher.png"
//                                   alt="asscher"
//                                   className="img-size1"
//                                 ></img>
//                                 Asscher
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/marquise">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
//                                   alt="marquise"
//                                   className="img-size1"
//                                 ></img>
//                                 Marquise
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/heart">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/heart.png"
//                                   alt="heart"
//                                   className="img-size1"
//                                 ></img>
//                                 Heart
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/pear">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
//                                   alt="pear"
//                                   className="img-size1"
//                                 ></img>
//                                 Pear
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </Col>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <h2 className="title14 font-bold text-uppercase mtb">
//                             Create Your Own Ring
//                           </h2>
//                           <ul>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
//                                   className="img-size"
//                                   alt="Start With An Earth-Mined Diamond"
//                                 ></img>
//                                 Start With An Earth-Mined Diamond
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/lab-diamonds-search">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
//                                   className="img-size"
//                                   alt="Start With A Lab-Grown Diamond"
//                                 ></img>
//                                 Start With A Lab-Grown Diamond
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/build-your-own-ring">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/ring-images/jwel.png"
//                                   className="img-size"
//                                   alt="Start With A Setting"
//                                 ></img>
//                                 Start With A Setting
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </Col>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <h2 className="title14 font-bold text-uppercase mtb">
//                             Learn About
//                           </h2>
//                           <ul>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search">
//                                 Diamond Shapes
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/lab-diamonds-search">
//                                 4c's of Diamond
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </Col>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <img
//                             src="https://demo.belgiumwebnet.com/assets/images/menu_img/diamond.jpg"
//                             alt="Start With A Setting"
//                           ></img>
//                         </div>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Dropdown.Menu>
//               </Dropdown>
//               <Dropdown
//                 onMouseLeave={() => setFjShowDropdown(false)}
//                 onMouseOver={() => setFjShowDropdown(true)}
//               >
//                 <Dropdown.Toggle className="main-style" id="dropdown-basic">
//                   Fine Jewlery
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu show={showFineDropdown}>
//                   <Container>
//                     <Row>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <h2 className="title14 font-bold text-uppercase mtb">
//                             <a to="https://demo.belgiumwebnet.com/natural-diamonds-search">
//                               Fine Jewlery
//                             </a>
//                           </h2>
//                           <ul className="list-none">
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/round">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
//                                   alt="round"
//                                   className="img-size1"
//                                 ></img>
//                                 Round
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/princess">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
//                                   alt="princess"
//                                   className="img-size1"
//                                 ></img>
//                                 Princess
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/cushion">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
//                                   alt="cushion"
//                                   className="img-size1"
//                                 ></img>
//                                 Cushion
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/emerald">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
//                                   alt="emerald"
//                                   className="img-size1"
//                                 ></img>
//                                 Emerald
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/oval">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
//                                   alt="oval"
//                                   className="img-size1"
//                                 ></img>
//                                 Oval
//                               </a>
//                             </li>
//                           </ul>
//                           <ul className="list-none">
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/radiant">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/rediant.png"
//                                   alt="radiant"
//                                   className="img-size1"
//                                 ></img>
//                                 Radiant
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/asscher">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/asscher.png"
//                                   alt="asscher"
//                                   className="img-size1"
//                                 ></img>
//                                 Asscher
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/marquise">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
//                                   alt="marquise"
//                                   className="img-size1"
//                                 ></img>
//                                 Marquise
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/heart">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/heart.png"
//                                   alt="heart"
//                                   className="img-size1"
//                                 ></img>
//                                 Heart
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search/pear">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
//                                   alt="pear"
//                                   className="img-size1"
//                                 ></img>
//                                 Pear
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </Col>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <h2 className="title14 font-bold text-uppercase mtb">
//                             Create Your Own Ring
//                           </h2>
//                           <ul>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
//                                   className="img-size"
//                                   alt="Start With An Earth-Mined Diamond"
//                                 ></img>
//                                 Start With An Earth-Mined Diamond
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/lab-diamonds-search">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
//                                   className="img-size"
//                                   alt="Start With A Lab-Grown Diamond"
//                                 ></img>
//                                 Start With A Lab-Grown Diamond
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/build-your-own-ring">
//                                 <img
//                                   src="https://demo.belgiumwebnet.com/assets/images/ring-images/jwel.png"
//                                   className="img-size"
//                                   alt="Start With A Setting"
//                                 ></img>
//                                 Start With A Setting
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </Col>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <h2 className="title14 font-bold text-uppercase mtb">
//                             Learn About
//                           </h2>
//                           <ul>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/natural-diamonds-search">
//                                 Diamond Shapes
//                               </a>
//                             </li>
//                             <li>
//                               <a to="https://demo.belgiumwebnet.com/lab-diamonds-search">
//                                 4c's of Diamond
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </Col>
//                       <Col md={3}>
//                         <div className="mega-list-cat">
//                           <img
//                             src="https://demo.belgiumwebnet.com/assets/images/menu_img/diamond.jpg"
//                             alt="Start With A Setting"
//                           ></img>
//                         </div>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Dropdown.Menu>
//               </Dropdown>
//               <Nav.Link to="/">Custom Design</Nav.Link>
//             </Nav>
//             <Form className="d-flex search-box">
//               <FormControl
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Menu;
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Menu = () => {
  return (
    <div className="demo-menu">
      <ul className="navbar-right-ul">
        <li className="menu menu-item-has-children desktop_logo">
          <div className="logo logo1">
            <a href="https://demo.belgiumwebnet.com/">
              <img
                src="https://demo.belgiumwebnet.com/assets/logo/logo2.png"
                alt="Logo"
              ></img>
            </a>
          </div>
        </li>
        <li className="menu menu-item-has-children has-mega-menu hidden-sm hide_tab  dropdown mega-dropdown desktop_menu">
          <a
            href="https://demo.belgiumwebnet.com/diamonds"
            data-title="Diamonds"
            className="first-menu cool_menu"
          >
            Diamonds
          </a>
          <div className="dropdown-menu mega-dropdown-menu">
            <Container className="dropdown-body">
              <div className="content-mega-menu">
                <Row>
                  <Col
                    md={3}
                    sm={3}
                    className="tablet_view_padding no-padding border_left_menu"
                  >
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
                  <Col
                    md={3}
                    sm={3}
                    className="tablet_view_padding no-padding border_left_menu"
                  >
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
                  <Col md={2} sm={2} className="no-padding">
                    <div className="mega-list-cat m-top">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Learn About
                      </h2>
                      <ul>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/diamond-education#loosediamonds">
                            Diamond Shapes
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/diamond-education?page=4c">
                            4C's Of A Diamond
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={4} sm={5}>
                    <div className="mega-list-cat">
                      <a href="https://demo.belgiumwebnet.com/diamonds">
                        <img
                          src="https://demo.belgiumwebnet.com/assets/images/menu_img/diamond.jpg"
                          alt="Custom Diamond Jewelry NYC"
                        ></img>
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </li>
        <li className="menu menu-item-has-children has-mega-menu hidden-sm hide_tab dropdown mega-dropdown desktop_menu">
          <a
            href="https://demo.belgiumwebnet.com/gemstones"
            data-title="Gemstones"
            className="first-menu cool_menu"
          >
            Gemstones
          </a>
          <div className="dropdown-menu mega-dropdown-menu w-100">
            <Container className="dropdown-body">
              <div className="content-mega-menu">
                <Row>
                  <Col
                    md={3}
                    sm={3}
                    className="tablet_view_padding no-padding border_left_menu"
                  >
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        <a href="https://demo.belgiumwebnet.com/gemstones-search">
                          Shop By Shape
                        </a>
                      </h2>
                      <ul className="list-none">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search/round">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
                              alt="round"
                              className="img-size1"
                            ></img>
                            Round
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search/princess">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
                              alt="princess"
                              className="img-size1"
                            ></img>
                            Princess
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search/cushion">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
                              alt="cushion"
                              className="img-size1"
                            ></img>
                            Cushion
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search/emerald">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
                              alt="emerald"
                              className="img-size1"
                            ></img>
                            Emerald
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search/oval">
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
                          <a href="https://demo.belgiumwebnet.com/gemstones-search/radiant">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/rediant.png"
                              alt="radiant"
                              className="img-size1"
                            ></img>
                            Radiant
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search/asscher">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/asscher.png"
                              alt="asscher"
                              className="img-size1"
                            ></img>
                            Asscher
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search/marquise">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
                              alt="marquise"
                              className="img-size1"
                            ></img>
                            Marquise
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search/heart">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/heart.png"
                              alt="heart"
                              className="img-size1"
                            ></img>
                            Heart
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search/pear">
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
                  <Col
                    md={3}
                    sm={3}
                    className="tablet_view_padding no-padding border_left_menu"
                  >
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Create Your Own Ring
                      </h2>
                      <ul>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                              className="img-size"
                              alt="Start With A Gemstone"
                            ></img>
                            Start With A Gemstone
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
                    <div className="mega-list-cat m-top">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Shop By Color
                      </h2>
                      <ul className="list-none">
                        <li>
                          <a
                            href="https://demo.belgiumwebnet.com/gemstones-search?gemcolor=blue"
                            className="blue"
                          >
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/blue.png"
                              width="30px"
                              alt="blue gemstone"
                            ></img>
                            Blue
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demo.belgiumwebnet.com/gemstones-search?gemcolor=red"
                            className="red"
                          >
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/red.png"
                              width="30px"
                              alt="red gemstone"
                            ></img>
                            Red
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demo.belgiumwebnet.com/gemstones-search?gemcolor=yellow"
                            className="yellow"
                          >
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/yellow.png"
                              width="30px"
                              alt="yellow gemstone"
                            ></img>
                            Yellow
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demo.belgiumwebnet.com/gemstones-search?gemcolor=pink"
                            className="pink"
                          >
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/pink.png"
                              width="30px"
                              alt="pink gemstone"
                            ></img>
                            Pink
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none">
                        <li>
                          <a
                            href="https://demo.belgiumwebnet.com/gemstones-search?gemcolor=orange"
                            className="orange"
                          >
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/orange.png"
                              width="30px"
                              alt="orange gemstone"
                            ></img>
                            Orange
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demo.belgiumwebnet.com/gemstones-search?gemcolor=green"
                            className="green"
                          >
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/green.png"
                              width="30px"
                              alt="green gemstone"
                            ></img>
                            Green
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demo.belgiumwebnet.com/gemstones-search?gemcolor=purple"
                            className="purple"
                          >
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/purple.png"
                              width="30px"
                              alt="purple gemstone"
                            ></img>
                            Purple
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demo.belgiumwebnet.com/gemstones-search?gemcolor=other"
                            className="multi"
                          >
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/color/other.png"
                              width="30px"
                              alt="sapphire gemstone"
                            ></img>
                            Other
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={3} sm={3} className="tablet_view_padding no-padding">
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Gemstone Type
                      </h2>
                      <ul className="list-none">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search?gemtype=sapphire">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_icon/sapphire.png"
                              className="img-size"
                              alt="Sapphire"
                            ></img>
                            Sapphire
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search?gemtype=ruby">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_icon/ruby.png"
                              className="img-size"
                              alt="Ruby"
                            ></img>
                            Ruby
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search?gemtype=tanzanite">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_icon/tanzanite.png"
                              className="img-size"
                              alt="Tanzanite"
                            ></img>
                            Tanzanite
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search?gemtype=tourmaline">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_icon/tourmaline.png"
                              className="img-size"
                              alt="Tourmaline"
                            ></img>
                            Tourmaline
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search?gemtype=emerald">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_icon/emerald.png"
                              className="img-size"
                              alt="Emerald"
                            ></img>
                            Emerald
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search?gemtype=garnet">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_icon/garnet.png"
                              className="img-size"
                              alt="Garnet"
                            ></img>
                            Garnet
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search?gemtype=opal">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_icon/opal.png"
                              className="img-size"
                              alt="Opal"
                            ></img>
                            Opal
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search?gemtype=aquamarine">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_icon/aquamarine.png"
                              className="img-size"
                              alt="Aquamarine"
                            ></img>
                            Aquamarine
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search?gemtype=spectrolite">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_icon/Spectrolite.png"
                              className="img-size"
                              alt="Spectrolite"
                            ></img>
                            Spectrolite
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/gemstones-search?gemtype=other">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_icon/other2.png"
                              className="img-size"
                              alt="Other Gem"
                            ></img>
                            Other Gems
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-list-cat m-top">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Learn About
                      </h2>
                      <ul>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/diamond-education#gemstone">
                            Learn About Gemstones
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={3}>
                    <a href="https://demo.belgiumwebnet.com/gemstones">
                      <img
                        src="https://demo.belgiumwebnet.com/assets/images/menu_img/gemstones.jpg"
                        alt="Gemstone"
                      ></img>
                    </a>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </li>
        <li className="menu menu-item-has-children has-mega-menu hidden-sm hide_tab  dropdown mega-dropdown desktop_menu">
          <a
            href="https://demo.belgiumwebnet.com/engagement-rings"
            data-title="Engagement Rings"
            className="cool_menu"
          >
            Engagement Rings
          </a>
          <div className="dropdown-menu mega-dropdown-menu">
            <Container className="dropdown-body">
              <div className="content-mega-menu">
                <Row>
                  <Col
                    md={3}
                    sm={3}
                    className="tablet_view_padding no-padding border_left_menu"
                  >
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Create Your Own Ring
                      </h2>
                      <ul>
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
                          <a href="https://demo.belgiumwebnet.com/gemstones-search">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/ring-builder/ring_part2.png"
                              className="img-size"
                              alt="Start With A Gemstone"
                            ></img>
                            Start With A Gemstone
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-list-cat m-top">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Learn About
                      </h2>
                      <ul>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/diamond-education#engagement">
                            Ring Types
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demo.belgiumwebnet.com/assets/images/eng-ring/Ring-sizing-guide.pdf"
                            target="_blank"
                          >
                            Ring Size Guide
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col
                    md={3}
                    sm={3}
                    className="tablet_view_padding no-padding border_left_menu"
                  >
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold  text-uppercase mtb">
                        Shop By Style
                      </h2>
                      <ul className="list-none">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?styles=Halo">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/halo.png"
                              alt="halo"
                              className="engagement_img"
                            ></img>
                            Halo
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?styles=Three-Stone">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/three-stone.png"
                              alt="three-stone"
                              className="engagement_img"
                            ></img>
                            Three-Stone
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?styles=Multirow">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/mutirow-band.png"
                              alt="Multirow"
                              className="engagement_img"
                            ></img>
                            Multirow
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?styles=Pave">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pave1.png"
                              alt="Pave"
                              className="engagement_img"
                            ></img>
                            Pave
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?styles=Solitaire">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/solitaire.png"
                              alt="Solitaire"
                              className="engagement_img"
                            ></img>
                            Solitaire
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?styles=Channel-Set">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/single-row1.png"
                              alt="Channel-Set"
                              className="engagement_img"
                            ></img>
                            Channel Set
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?styles=Vintage">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/vintage.png"
                              alt="Vintage"
                              className="engagement_img"
                            ></img>
                            Vintage
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?styles=Bypass">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bypass.png"
                              alt="Bypass"
                              className="engagement_img"
                            ></img>
                            Bypass
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?styles=Side-Stone">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/sidestone.png"
                              alt="Side-Stone"
                              className="engagement_img"
                            ></img>
                            Side-Stone
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?styles=Others">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/trellis.png"
                              alt="Others"
                              className="engagement_img"
                            ></img>
                            Others
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-list-cat m-top">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Shop By Metal
                      </h2>
                      <ul className="list-none">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?metals=14K-Rose-Gold">
                            <span className="color-con con2"></span>Rose Gold
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?metals=14K-White-Gold">
                            <span className="color-con con3"></span>White Gold
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?metals=14K-Yellow-Gold">
                            <span className="color-con con4"></span>Yellow Gold
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?metals=Platinum">
                            <span className="color-con con5"></span>Platinum
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Shop By Shape
                      </h2>
                      <ul className="list1">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?shapes=round">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
                              alt="round"
                              className="img-size1"
                            ></img>
                            Round
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?shapes=princess">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
                              alt="princess"
                              className="img-size1"
                            ></img>
                            Princess
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?shapes=cushion">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
                              alt="cushion"
                              className="img-size1"
                            ></img>
                            Cushion
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?shapes=oval">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
                              alt="oval"
                              className="img-size1"
                            ></img>
                            Oval
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?shapes=emerald">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
                              alt="emerald"
                              className="img-size1"
                            ></img>
                            Emerald
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?shapes=marquise">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
                              alt="marquise"
                              className="img-size1"
                            ></img>
                            Marquise
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/build-your-own-ring?shapes=pear">
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
                  <Col md={4}>
                    <a href="https://demo.belgiumwebnet.com/engagement-rings">
                      <img
                        src="https://demo.belgiumwebnet.com/assets/images/menu_img/engagement.jpg"
                        alt="Custom Diamond Engagement Rings NYC"
                      ></img>
                    </a>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </li>
        <li className="menu menu-item-has-children has-mega-menu hidden-sm hide_tab  wed-menu dropdown mega-dropdown wed desktop_menu">
          <a
            href="https://demo.belgiumwebnet.com/wedding-rings-and-bands"
            data-title="Wedding Rings"
            className="cool_menu"
          >
            Wedding Rings
          </a>
          <div className="dropdown-menu mega-dropdown-menu">
            <Container className="dropdown-body">
              <div className="content-mega-menu">
                <Row>
                  <Col
                    md={2}
                    className="tablet_view_padding no-padding border_left_menu"
                  >
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Women
                      </h2>
                      <ul className="">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=anniversary">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/anniversary_ring.png"
                              className="engagement_img"
                              alt="anniversary_ring"
                            ></img>
                            Anniversary
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=channel set">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/channel-set-rings.png"
                              className="engagement_img"
                              alt="channel-set-rings"
                            ></img>
                            Channel Set
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=pave">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/pave-rings.png"
                              className="engagement_img"
                              alt="pave-rings"
                            ></img>
                            Pave
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=stackable">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/stackable-rings.png"
                              className="engagement_img"
                              alt="stackable-rings"
                            ></img>
                            Stackable
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=eternity">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/eternity-ring.png"
                              className="engagement_img"
                              alt="eternity-ring"
                            ></img>
                            Eternity
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=infinity ring">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/infinity-rings.png"
                              className="engagement_img"
                              alt="infinity-rings"
                            ></img>
                            Infinity
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col
                    md={2}
                    className="tablet_view_padding no-padding border_left_menu"
                  >
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        &nbsp;
                      </h2>
                      <ul className="">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=plain metal">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/plain-metal-rings.png"
                              className="engagement_img"
                              alt="plain-metal-rings"
                            ></img>
                            Plain Metal
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=curved">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/curved-rings.png"
                              className="engagement_img"
                              alt="curved-rings"
                            ></img>
                            Curved
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=fancy">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/fancy-shape-rings.png"
                              className="engagement_img"
                              alt="fancy-shape-rings"
                            ></img>
                            Fancy Shape
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=Wraps%20%26%20Inserts">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/wraps-&amp;-inserts-rings.png"
                              className="engagement_img"
                              alt="wraps-&amp;-inserts-rings"
                            ></img>
                            Wraps &amp; Inserts
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=bezel set">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bezel-set-rings.png"
                              className="engagement_img"
                              alt="bezel-set-rings"
                            ></img>
                            Bezel Set
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=bar">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bar-set-rings.png"
                              className="engagement_img"
                              alt="bar-set-rings"
                            ></img>
                            Bar Set
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col
                    md={2}
                    className="tablet_view_padding no-padding border_left_menu"
                  >
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        men
                      </h2>
                      <ul className="">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=Artisan Carved Bands">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/plain-metal-rings.png"
                              className="engagement_img"
                              alt="plain-metal-rings"
                            ></img>
                            Artisan Carved Bands
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=Basic Carved">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/curved-rings.png"
                              className="engagement_img"
                              alt="curved-rings"
                            ></img>
                            Basic Carved
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=Basics">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/fancy-shape-rings.png"
                              className="engagement_img"
                              alt="fancy-shape-rings"
                            ></img>
                            Basics
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=Diamonds">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/wraps-&amp;-inserts-rings.png"
                              className="engagement_img"
                              alt="wraps-&amp;-inserts-rings"
                            ></img>
                            Diamonds
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=Hammered Finish">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bezel-set-rings.png"
                              className="engagement_img"
                              alt="bezel-set-rings"
                            ></img>
                            Hammered Finish
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=ring style&amp;look=Religious and Nationality">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/gems_img/icon/bar-set-rings.png"
                              className="engagement_img"
                              alt="bar-set-rings"
                            ></img>
                            Religious and Nationality
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col
                    md={2}
                    className="tablet_view_padding no-padding border_left_menu"
                  >
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Shop By Metal
                      </h2>
                      <ul className="list1">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=metal&amp;look=14K-Rose-Gold">
                            <span className="color-con con2"></span>Rose Gold
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=metal&amp;look=14K-White-Gold">
                            <span className="color-con con3"></span>White Gold
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=metal&amp;look=14K-Yellow-Gold">
                            <span className="color-con con4"></span>Yellow Gold
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/wedding-rings-and-bands?param=metal&amp;look=Platinum">
                            <span className="color-con con5"></span>Platinum
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-list-cat m-top">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Learn About
                      </h2>
                      <ul>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/diamond-education#wedding">
                            Ring Types
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demo.belgiumwebnet.com/assets/images/eng-ring/Ring-sizing-guide.pdf"
                            target="_blank"
                          >
                            Ring Size Guide
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={2}>
                    <a href="https://demo.belgiumwebnet.com/wedding-rings-and-bands">
                      <img
                        src="https://demo.belgiumwebnet.com/assets/images/menu_img/wedding.jpg"
                        alt="Unique Design Diamond Jewelry NYC"
                      ></img>
                    </a>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </li>
        <li className="menu menu-item-has-children has-mega-menu hidden-sm hide_tab  dropdown mega-dropdown desktop_menu">
          <a
            href="https://demo.belgiumwebnet.com/fine-jewelry"
            data-title="Fine Jewelry"
            className="cool_menu"
          >
            Fine jewelry
          </a>
          <div className="dropdown-menu mega-dropdown-menu">
            <Container className="dropdown-body">
              <div className="content-mega-menu">
                <Row>
                  <Col
                    md={2}
                    className="tablet_view_padding no-padding border_left_menu"
                  >
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Shop By Type
                      </h2>
                      <ul className="l">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/fashion-rings">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/ring.svg"
                              alt="Diamond Rings NYC"
                              className="img-fit-size"
                            ></img>
                            Rings
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/pendants">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/nack.svg"
                              alt="Diamond Necklaces NYC"
                              className="img-fit-size"
                            ></img>
                            Pendants
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/necklace">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/necklace.svg"
                              alt="Custom Diamond Necklace NYC"
                              className="img-fit-size"
                            ></img>
                            Necklaces
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/bracelets">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/brace.svg"
                              alt="Diamond Bracelet NYC"
                              className="img-fit-size"
                            ></img>
                            Bracelets
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/earrings">
                            <img
                              src="https://demo.belgiumwebnet.com/assets/images/catelogsvg/earings.svg"
                              alt="Diamond Earings NYC"
                              className="img-fit-size"
                            ></img>
                            Earrings
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col
                    md={2}
                    className="tablet_view_padding no-padding border_left_menu"
                  >
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Shop By Metal
                      </h2>
                      <ul className="">
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/fine-jewelry?param=metal&amp;look=14K-Rose-Gold">
                            <span className="color-con con2"></span>Rose Gold
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/fine-jewelry?param=metal&amp;look=14K-White-Gold">
                            <span className="color-con con3"></span>White Gold
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/fine-jewelry?param=metal&amp;look=14K-Yellow-Gold">
                            <span className="color-con con4"></span>Yellow Gold
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/jewelry/fine-jewelry?param=metal&amp;look=Platinum">
                            <span className="color-con con5"></span>Platinum
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="mega-list-cat">
                      <h2 className="title14 font-bold text-uppercase mtb">
                        Learn About
                      </h2>
                      <ul>
                        <li>
                          <a href="https://demo.belgiumwebnet.com/diamond-education#jewelry">
                            Your Jewelry
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demo.belgiumwebnet.com/assets/images/eng-ring/Ring-sizing-guide.pdf"
                            target="_blank"
                          >
                            Ring Size Guide
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6}>
                    <a href="https://demo.belgiumwebnet.com/fine-jewelry">
                      <img
                        src="https://demo.belgiumwebnet.com/assets/images/menu_img/finejewelry.jpg"
                        alt="Fine Jewelry"
                      ></img>
                    </a>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </li>
        <li className="menu cool_menu1 desktop_menu">
          <a href="https://demo.belgiumwebnet.com/createcustom">
            Custom Design
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

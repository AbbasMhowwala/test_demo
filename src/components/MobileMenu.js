import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Col, Container, Row } from "react-bootstrap";

export default function MobileMenu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  }
  const [open, setOpen] = React.useState(true); 
  const handleClick = () => {
    setOpen(!open);
  }

  const list = (anchor) => (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Diamonds" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
        <Container className="dropdown-body">
              <div className="content-mega-menu">
                <Row>
                  <Col
                  xs={12}
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
                    xs={12}
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
                  <Col xs={12} className="no-padding border_left_menu">
                    <div className="mega-list-cat">
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
                  <Col xs={12}>
                    <div className="mega-list-cat">
                      <a href="https://demo.belgiumwebnet.com/diamonds">
                        <img
                          src="https://demo.belgiumwebnet.com/assets/images/menu_img/diamond.jpg"
                          alt="Custom Diamond Jewelry NYC"
                          className="menu-image-mob"
                        ></img>
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
        </List>
      </Collapse>
    </List>
  );
  return (
    <div className="mobile_menu">
      <div className="logo logo1">
        <a href="https://demo.belgiumwebnet.com/">
          <img
            src="https://demo.belgiumwebnet.com/assets/logo/logo2.png"
            alt="Logo"
          ></img>
        </a>
      </div>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

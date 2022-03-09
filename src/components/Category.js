import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category-blocks pt-5 pb-5">
      <div className="section-banner-v4 mt-all">
        <div className="container container-v1">
          <div className="row box_banner_3">
            <div className="col-lg-4 col-md-4">
              <div className="box_img text-center relative">
                <div className="picture">
                  <Link to="/">
                    <img
                      src="//cdn.shopify.com/s/files/1/0474/3168/0162/files/banner-v4-1.jpg?v=1599187203"
                      className="img-fluid"
                      alt="banner"
                    />
                  </Link>
                </div>
                <div className="info">
                  <h3 className="title" style={{ color: "#000000" }}>
                    Wedding jewelry
                  </h3>
                  <div className="link">
                    <Link to="/" className="button-banner">
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-5 mt-sm-0">
              <div className="box_img text-center relative">
                <div className="picture">
                  <Link to="/">
                    <img
                      src="//cdn.shopify.com/s/files/1/0474/3168/0162/files/banner-v4-2.jpg?v=1599187213"
                      className="img-fluid"
                      alt="banner"
                    />
                  </Link>
                </div>
                <div className="info">
                  <h3 className="title" style={{ color: "#000000" }}>
                    Wedding dress
                  </h3>
                  <div className="link">
                    <Link to="/" className="button-banner">
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-5 mt-sm-0">
              <div className="box_img text-center relative">
                <div className="picture">
                  <Link to="/">
                    <img
                      src="//cdn.shopify.com/s/files/1/0474/3168/0162/files/banner-v4-3.jpg?v=1599187221"
                      className="img-fluid"
                      alt="banner"
                    />
                  </Link>
                </div>
                <div className="info">
                  <h3 className="title" style={{ color: "#000000" }}>
                    Wedding shoes
                  </h3>
                  <div className="link">
                    <Link to="/" className="button-banner">
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

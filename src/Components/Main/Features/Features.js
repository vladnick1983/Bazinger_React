import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <>
      <section id="summariseTheFeatures">
        <div className="container text-center fauture mt-3">
          <h2 className="fauture-title">summarise the features</h2>
          <p className="fauture-text">summarise what your product all aboul</p>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 d-block">
              <div className="circle">
                <img src="img/icon1.png" alt="img" />
              </div>
              <div className="description">
                <h4 className="text-center descriotion-title">
                  Attractive Layout
                </h4>
                <p className="text-center descriotion-text">
                  Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                  pulvinar massa idporta nequetiam elerisque mi id faucibus
                  iaculis vitae pulvinar.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 d-block">
              <div className="circle">
                <img src="img/icon2.png" alt="img" />
              </div>
              <div className="description">
                <h4 className="text-center descriotion-title">Fresh Design</h4>
                <p className="text-center descriotion-text">
                  Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                  pulvinar massa idporta nequetiam elerisque mi id faucibus
                  iaculis vitae pulvinar.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 d-block">
              <div className="circle">
                <img src="img/icon3.png" alt="img" />
              </div>
              <div className="description">
                <h4 className="text-center descriotion-title">Multipurpose</h4>
                <p className="text-center descriotion-text">
                  Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                  pulvinar massa idporta nequetiam elerisque mi id faucibus
                  iaculis vitae pulvinar.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 d-block">
              <div className="circle">
                <img src="img/icon4.png" alt="img" />
              </div>
              <div className="description">
                <h4 className="text-center descriotion-title">
                  Easy to customize
                </h4>
                <p className="text-center descriotion-text">
                  Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                  pulvinar massa idporta nequetiam elerisque mi id faucibus
                  iaculis vitae pulvinar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features;

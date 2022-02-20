import React from "react";
import "./Carusel.css";
const Carusel = () => {
  return (
    <>
      <div className="carousel slide " id="carouselControl">
        <div className="carousel-inner">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselControl"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselControl"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselControl"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-item active" data-bs-interval="1000000">
            <img src="img/Base.jpg" className="d-block w-100 " alt="foto" />
            <div className="carousel-caption">
              <div className="  carousel-caption-inner">
                <p className="title">
                  Simple, Beautiful <span>and Amazing</span>
                </p>
                <p className="text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat quidem repellendus quia? Iure at inventore minima,
                  temporibus dolor magnam dicta maxime unde eaque sunt velit,
                  dolores voluptas, quod voluptate enim.
                </p>
                <div className="button">
                  <button type="button" className=" btn btn-download">
                    Download
                  </button>
                  <button type="button" className=" btn btn-learn ">
                    Learn More
                  </button>
                </div>
                <div className="available">
                  <div className="available-title">
                    <p>Available on :</p>
                  </div>
                  <div className="available-iphone">
                    <img
                      src="img/iphone.png"
                      alt="icon"
                      width="25px"
                      height="25px"
                    />
                  </div>

                  <div className="available-android">
                    <img
                      src="img/android.png"
                      alt="icon"
                      width="25px"
                      height="25px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000000">
            <img src="img/Base.jpg" className="w-100" alt="foto" />
          </div>
          <div className="carousel-item" data-bs-interval="1000000">
            <img src="img/Base.jpg" className="w-100" alt="foto" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselControl"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselControl"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </>
  );
};
export default Carusel;

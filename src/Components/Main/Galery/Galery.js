import "./Galery.css";
const Galery = () => {
  return (
    <>
      <section id="showTheGallery">
        <div className="container text-center fauture mt-3">
          <h2 className="fauture-title">show the gallery</h2>
          <p className="fauture-text">summarise what your product all aboul</p>
        </div>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card">
                <div className="gallery-block">
                  <img src="img/Image1.png" className="card-img-top" alt="foto" />
                  <h2>screenshot #1</h2>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                    pulvinar massa idporta nequetiam elerisque mi id faucibus
                    iaculis vitae pulvinar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="gallery-block">
                  <img src="img/Image2.png" className="card-img-top" alt="foto" />
                  <h2>screenshot #2</h2>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                    pulvinar massa idporta nequetiam elerisque mi id faucibus
                    iaculis vitae pulvinar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="gallery-block">
                  <img src="img/Image3.png" className="card-img-top" alt="foto" />
                  <h2>screenshot #3</h2>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                    pulvinar massa idporta nequetiam elerisque mi id faucibus
                    iaculis vitae pulvinar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="gallery-block">
                  <img src="img/Image4.png" className="card-img-top" alt="foto" />
                  <h2>screenshot #4</h2>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                    pulvinar massa idporta nequetiam elerisque mi id faucibus
                    iaculis vitae pulvinar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Galery;

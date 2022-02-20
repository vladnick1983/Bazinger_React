import "./Video.css";

const Video = () => {
  return (
    <>
      <section id="videoSection">
        <div className="container section-video">
          <div className="action">
            <button
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img src="img/button.png" alt="" />
            </button>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/6po20I3nokQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-center action-title">
              Watch the best Technology in <span>Action</span>
            </h2>
            <p className="text-center action-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
              nunc vitae tellus luctus ullamcorper. Nam porttitor ullamcorper
              felis at convallis. Aenean ornare vestibulum nisi fringilla
              lacinia. Nullam pulvinar sollicitudin velit id laoreet. Quisque
              non rhoncus sem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Video;

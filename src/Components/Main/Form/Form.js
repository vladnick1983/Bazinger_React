import "./Form.css";
const Form = () => {
  return (
    <>
      <section id="contactForm">
        <div className="container form-contact">
          <form action="#" method="get" className="form">
            <div>
              <p className="form-title">Contact</p>
            </div>
            <div>
              <input
                type="text"
                tabIndex="1"
                name="name"
                placeholder="Your name"
              />
            </div>
            <div>
              <input
                type="email"
                tabIndex="2"
                name="email"
                placeholder="Your emai"
              />
            </div>
            <div>
              <input
                type="text"
                tabIndex="3"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                name="text"
                id=""
                tabIndex="4"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button id="button-submit" type="submit" tabIndex="5">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Form;

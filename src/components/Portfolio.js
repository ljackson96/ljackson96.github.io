import React, { Fragment } from "react";

export default function Portfolio() {
  return (
    <React.Fragment>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work Below.</h1>
            {/* portfolio-wrapper */}
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/i-software.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>I-Software Inc.</h5>
                        <p>Web Development </p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/daytripper.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Day Tripper</h5>
                        <p>App Development</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/meme.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Meme Generator</h5>
                        <p>App Development</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/covid-19.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Covid-19 Tracker</h5>
                        <p>App Development</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/sweeteats.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Sweet Eats</h5>
                        <p>App Development</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* portfolio-wrapper end */}
          </div>{" "}
          {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/i-software.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>I-Software Inc.</h4>
              <p>Business website created using Wordpress.</p>
              <span className="categories">
                <i className="fa fa-tag" />
                Webdesign
              </span>
            </div>
            <div className="link-box">
              <a href="http://www.i-softwareinc.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/daytripper.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Day Tripper</h4>
              <p>
                Schedule your day in the surrounding Austin areas using
                daytripper! Built using Ruby on Rails and Bootstrap.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                App Development, Web Development
              </span>
            </div>
            <div className="link-box">
              <a href="https://pacific-hamlet-77863.herokuapp.com/welcome/index">
                Live Demo
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/meme.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Meme Generator</h4>
              <p>
                Create your own hilarious meme using our generator. Created
                using React.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                App Development, Web Development
              </span>
            </div>
            <div className="link-box">
              <a href="https://github.com/ljackson96/meme-generator">
                Source Code
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/covid-19.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Covid-19 Tracker</h4>
              <p>
                Track COVID-19 cases in your country using my tracker. Created
                using React.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                App Development
              </span>
            </div>
            <div className="link-box">
              <a href="https://github.com/ljackson96/Covid-19-Tracker">
                Source Code
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/sweeteats.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Sweet Eats</h4>
              <p>
                Instagram clone catered to deserts. Built using Vanilla JS and
                Rails.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                App Development, Webdesign
              </span>
            </div>
            <div className="link-box">
              <a href="https://github.com/ljackson96/Sweeteats-Frontend">
                Source Code
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-05 End */}
        </div>{" "}
        {/* row End */}
      </section>
    </React.Fragment>
  );
}

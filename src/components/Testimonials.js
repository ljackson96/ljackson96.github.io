import React from "react";

export default function Testimonials() {
  return (
    <React.Fragment>
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Some daily positivity</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>
                        Before software can be reusable it first has to be
                        usable.
                      </p>
                      <cite>Ralph Johnson</cite>
                    </blockquote>
                  </li>{" "}
                  {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>
                        Your work is going to fill a large part of your life,
                        and the only way to be truly satisfied is to do what you
                        believe is great work. And the only way to do great work
                        is to love what you do. If you haven't found it yet,
                        keep looking. Don't settle. As with all matters of the
                        heart, you'll know when you find it.
                      </p>
                      <cite>Steve Jobs</cite>
                    </blockquote>
                  </li>{" "}
                  {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>
                        Don’t worry if it doesn’t work right. If everything did,
                        you’d be out of a job.
                      </p>
                      <cite>Mr. Adobe</cite>
                    </blockquote>
                  </li>{" "}
                  {/* slide ends */}
                </ul>
              </div>{" "}
              {/* div.flexslider ends */}
            </div>{" "}
            {/* div.flex-container ends */}
          </div>{" "}
          {/* row ends */}
        </div>{" "}
        {/* text-container ends */}
      </section>{" "}
      {/* Testimonials Section End*/}
    </React.Fragment>
  );
}

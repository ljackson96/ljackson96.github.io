import React from "react";
import { useForm } from "react-hook-form";
import firebase from "firebase";

export default function Contact() {
  var database = firebase.database();
  var ref = database.ref("info");
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    alert("Your message was received, thank you!");
    ref.push(data);
  };
  return (
    <React.Fragment>
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <div className="ten columns">
            <p className="lead">
              Thank you for visting my site! Be sure to connect with me on
              LinkedIn professionally, or Facebook, Instagram and/or Twitter for
              a more personal look. If you want to get in touch about anything
              (coding, careers, gaming, life, etc), fill out the form below and
              I will get back to you very soon.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="contactForm"
              name="contactForm"
            >
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size={35}
                    id="contactName"
                    name="contactName"
                    ref={register({ required: true })}
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size={35}
                    id="contactEmail"
                    name="contactEmail"
                    ref={register({ required: true })}
                  />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size={35}
                    id="contactSubject"
                    name="contactSubject"
                    ref={register}
                  />
                </div>
                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols={50}
                    rows={15}
                    id="contactMessage"
                    name="contactMessage"
                    defaultValue={""}
                    ref={register({ required: true })}
                  />
                </div>
                <div>
                  <input type="submit" className="submit"></input>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>{" "}
            {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />
              Your message was sent, thank you!
              <br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                Lawrence Jackson
                <br />
                172 Hollis Ln <br />
                Kyle, TX 78640 US
                <br />
                <span>(281) 312-9599</span>
              </p>
            </div>
            <div className="widget widget_tweets">
              <h4 className="widget-title">Favorite Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    Life is like a sandwich, no matter how you make it, the
                    bread always comes first.
                    <br />
                    <a href="#">https://tinyurl.com/yyz9p8ud</a>
                  </span>
                  <b>
                    <a href="#">2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Enjoy this life while you are here!
                    <br />
                    <a href="#">https://tinyurl.com/yyz9p8ud</a>
                  </span>
                  <b>
                    <a href="#">3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </React.Fragment>
  );
}

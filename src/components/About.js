import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="/public/images/LJ2.JPG" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              I'm Lawrence Jr, or just "J.R." for short and as you might have
              already read, I'm a developer, content designer, and a traveler.
              This website was made to showcase all of what I can do and plan to
              do. Don't judge my writing based on this section though, this is
              by far my shoddiest work yet. I got into development because
              computers have always fascinated me. string hello = “hello”;
              creates a string of hello. CRAZY! I KNOW! But seriously, just
              seeing code getting converted to things we use in our everyday
              life, like Google or Snapchat, was no less than magic to me and
              that's where my quest to invent began. I got into design because I
              consider myself a pseudo-perfectionist, if that's even a word? In
              other words, I hate to see things 'not look good'. So I set out on
              a journey to make products that people use that 'look great', and
              I'm forever on that path. As a former collegiate athlete,
              traveling throughout the states during games was and will forever
              be a giant flex. I loved being able to see the world for another
              angle of sorts. It’s easy to lose sight of what you have, being
              able to escape the world and relax is otherworldly. I vowed after
              college to continue to travel and forever see what this beautiful
              world has to offer. I created this website so I could showcase all
              this and through this process, make it easier for you to connect
              with me. If you like what you see, head over to the contact
              section below and send me a text. I would love to hear from you!
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Lawrence Jackson</span>
                  <br />
                  <span>
                    {" "}
                    <br />
                    Austin, TX US
                  </span>
                  <br />
                  <span>(281) 312-9599</span>
                  <br />
                  <span>ljackson96@outlook.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href="https://drive.google.com/file/d/1vkfhl7Lc9YOnbEzmWKG2zc_7v9zIOaBj/view?usp=sharing"
                    className="button"
                  >
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end .main-col */}
        </div>
      </section>
    </React.Fragment>
  );
}

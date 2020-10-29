import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a href="https://www.github.com/ljackson96">
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/lawrencej96">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ljack40">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lawrence-jackson96/">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ljack40/">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2020 CeeVee</li>
              <li>
                Template by{" "}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

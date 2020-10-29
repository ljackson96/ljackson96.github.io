import React, { Component } from "react";

const Header = ({ data }) => {
  return (
    <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Inspiration
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>{" "}
          {/* end #nav */}
        </nav>{" "}
        {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {data.name}.</h1>
            <h3>
              I'm a {data.location} based <span>{data.title}</span>,{" "}
              <span>Designer</span> and <span>Traveler</span>. When I'm not in
              front of an computer, you can find me either playing video games
              or out the states. Let's{" "}
              <a className="smoothscroll" href="#about">
                begin scrolling{" "}
              </a>
              and learn more{" "}
              <a className="smoothscroll" href="#about">
                about me
              </a>
              .
            </h3>
            <hr />
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/lawrencej96">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/JRonJS">
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
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    </React.Fragment>
  );
};

export default Header;

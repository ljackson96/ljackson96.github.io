import React from "react";

export default function Resume() {
  return (
    <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>University of Texas at San Antonio</h3>
                <p className="info">
                  BBA, Management Sciences <span>•</span>{" "}
                  <em className="date">December 2019</em>
                </p>
                <p>
                  Former collegiate athlete who served as key member of a
                  defense that led Conference USA through seven statistical
                  categories and ranked in the top 10 nationally in five. 3x
                  Conference USA Commissioner’s Honor Roll member.
                </p>
              </div>
            </div>{" "}
            {/* item end */}
            {/* item end */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Flatiron School</h3>
                <p className="info">
                  Software Engineering Student <span>•</span>{" "}
                  <em className="date">March 2020 - July 2020</em>
                </p>
                <p>
                  Coding bootcamp moved remote due to COVID-19. Over 525 hours
                  of completed projects using the latest web technologies.
                  Stacks include: Ruby (on Rails), JavaScript, React, Redux,
                  GraphQL, SQL, Docker, etc.
                </p>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Spurs Sports and Entertainment</h3>
                <p className="info">
                  Event Assistant <span>•</span>{" "}
                  <em className="date">December 2019 - March 2020</em>
                </p>
                <p>
                  Carry out the alignment of objectives with staff and
                  management through regular meetings and discussions.
                  Investigate, assess, and resolve customer complaints promptly
                  in order to achieve full customer satisfaction.
                </p>
              </div>
            </div>{" "}
            {/* item end */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <div className="bars">
              <ul className="skills">
                <li>
                  <span className="bar-expand photoshop" />
                  <em>Photoshop</em>
                </li>
                <li>
                  <span className="bar-expand illustrator" />
                  <em>Illustrator</em>
                </li>
                <li>
                  <span className="bar-expand wordpress" />
                  <em>Wordpress</em>
                </li>
                <li>
                  <span className="bar-expand css" />
                  <em>CSS</em>
                </li>
                <li>
                  <span className="bar-expand html5" />
                  <em>HTML5</em>
                </li>
                <li>
                  <span className="bar-expand jquery" />
                  <em>jQuery</em>
                </li>
              </ul>
            </div>
            {/* end skill-bars */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End skills */}
      </section>{" "}
      {/* Resume Section End*/}
    </React.Fragment>
  );
}

import c from "../About.module.css";

function About() {
  return (
    <div className={`${c.aboutContainer}`} >
      <div  className={`${c.cardContainer}`}>
        <h1>About</h1>
        Application made in the Front End module of Soy Henry bootcamp obtaining
        the data from Weather API. Technologies used were React, Javascript and
        CSS modules for its design. With this app you will be able to see the weather of all
        the cities in the world.
      </div>
    </div>
  );
}

export default About;

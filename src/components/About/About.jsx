import React from "react";
import {
  AboutContainer,
  AboutHeading,
  AboutContent,
  AboutLink,
} from "./About.styled";

function About() {
  return (
    <>
      <AboutContainer>
        <AboutHeading>About</AboutHeading>
        <div>
          <AboutContent>Search GitHub users app</AboutContent>
          <AboutContent>
            Built with React by{""}
            <a href="https://github.com/HarelStern1" target="_blank">
              <AboutLink>Harel Stern</AboutLink>
            </a>
          </AboutContent>
          <AboutContent>Version: 1.0.0</AboutContent>
        </div>
      </AboutContainer>
    </>
  );
}

export default About;

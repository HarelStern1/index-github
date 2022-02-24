import React from "react";
import { Typography } from "@material-ui/core";
import Header from "../Header/Header";
import "./styles.css";

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-heading">About</div>
        <div className="content-container">
          <Typography variant="h6" className="about-content">
            Search GitHub users app.
          </Typography>
          <Typography variant="h6" className="about-content">
            Built with React by Harel Stern.
          </Typography>
          <Typography variant="h6" className="about-content">
            Version: 1.0.0
          </Typography>
        </div>
      </div>
    </>
  );
}

export default About;

import React from "react";
import user from "../data/user";
import Links from "../components/Links"

function About(props) {
  if (!props.bio) {
    return null;
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <p id ="bio">
      {props.bio}
      </p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {user.github} linkedin = {user.linkedin}/>
    </div>
  );
}

export default About;

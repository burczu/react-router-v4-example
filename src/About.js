import React from 'react';

const About = (props) => {
  return (
    <div className="container">
      <h1>About!! {props.match.params.id}</h1>
    </div>
  );
}

export default About;

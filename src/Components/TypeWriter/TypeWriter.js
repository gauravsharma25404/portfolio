import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "Machine Learning Enthusiat"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
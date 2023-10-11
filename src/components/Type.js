import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Information Technology",
          "Be open to knowledge",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      
    />
    
    
  );
}

export default Type;
import React from "react";
import Part from "./Part";

const Content = ({ content }) => {
  return (
    <div>
      {content.map( data => {
        return(
            <Part part={data} />
        )
      })}
    </div>
  );
};

export default Content;

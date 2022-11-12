import React from "react";

const Content = ({ content }) => {
  return (
    <>
      {content.map( data => {
        return(
            <p key={data[1]}>
                {data[0]} {data[1]}
            </p>
        )
      })}
    </>
  );
};

export default Content;

import React from "react";

export default function Test(props) {
  console.log(props);
  return (
    <div>
      {props.text}
      {props.gender}
    </div>
  );
}

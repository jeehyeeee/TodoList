import React from "react";

export default function Header({children}) {
  console.log(children);
  return <header className="container">{children}</header>;
}

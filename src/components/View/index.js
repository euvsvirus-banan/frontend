import React from "react";
import Header from "./Header";

const View = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default View;

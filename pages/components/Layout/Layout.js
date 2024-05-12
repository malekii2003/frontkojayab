import Header from "../Header/Header";
import React from "react";
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <footer>this is footer</footer>
    </>
  );
}

export default Layout;

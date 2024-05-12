import React from "react";
import Logo from "../Logo/logo";
import Menu from "../Menu/Menu";
import MenuLogin from "../MenuLogin/MenuLogin";
import Search from "../Search/Search";
import Tagh1 from "../tag-h1-head/tagh1"








function Header() {
  return (
    <>
      <style jsx>{`
        .header {
          direction: rtl;
        }
        .main {
          background-image: url(pic/back.jpg);
          height: 670px;
          
        }
      `}</style>

      <div className="main">
        <div className="w-[100%] h-[80px] header flex justify-around items-center  max-h-80  ">
          <Logo />
          <Menu />
          <MenuLogin />
         
        </div>
        <Tagh1/>
        <Search/>
      </div>
    </>
  );
}

export default Header;

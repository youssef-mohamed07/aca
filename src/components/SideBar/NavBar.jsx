import React, { useState } from "react";
import SideBarMenuIcon from "./SideBarMenuIcon";
import SmallScreenSideBar from "./SmallScreenSideBar";
import Navigation from "./Navigation";

export default function NavBar() {
  const [open, toggleOpen] = useState(false);

  return (
    <>
      <SideBarMenuIcon open={open} toggleOpen={toggleOpen}></SideBarMenuIcon>
      <SmallScreenSideBar open={open}>
        <Navigation open={open} toggleOpen={toggleOpen}></Navigation>
      </SmallScreenSideBar>
    </>
  );
}

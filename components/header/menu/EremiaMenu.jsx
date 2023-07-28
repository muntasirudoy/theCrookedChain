import React, { useEffect, useState } from "react";
import Navbar, { Nav } from "../../nav/Navbar";
import MenuContent from "./MenuContent";
import Logo from "../../logo/Logo";
import DsnLink from "../../../hooks/DsnLink";
import { brand } from "../../../data/brand";

const menuContent = [
  {
    name: "Home",
    href :"/"
  },
  { name: "CRM Solution", href: "/crm-solution" },
  { name: "Creative Marketing", href: "/creative-solution" },
  { name: "Contact", href: "/contact" }
];
const EremiaMenu = ({ hamburger }) => {
  const [width,setWidth] = useState("138px")

  let $key = 0;
  const getSubMenu = (items) => {
    $key++;
    if (items.dropdownMenu) {
      return (
        <Nav.Dropdown name={items.name} key={$key}>
          {items.dropdownMenu.map((item) => getSubMenu(item))}
        </Nav.Dropdown>
      );
    }
    return (
      <Nav.Link href={items.href} key={$key}>
        {items.name}
      </Nav.Link>
    );
  };


  useEffect(() => {      
    window.addEventListener('resize', handleWindowResize);
    return () => {            
      window.removeEventListener('resize', handleWindowResize);     
    }  
  }, [width]); 
  const handleWindowResize=()=>{
    if (window.innerWidth >= 320 && window.innerWidth <= 575) {
      setWidth("130px")
    }else{
      setWidth("138px")
    }
  }

const brnadName = "The Crooked Chain"





  return (
    <Navbar hamburger={hamburger} >
      <Navbar.Brand href={"/"} transitionPage={{ title: brnadName.replace(/ /g, "<br/>")}}>
        <Logo width={width} height="56px" />
      </Navbar.Brand>

      <div
        style={{
          boxSizing: "border-box",
          position: "absolute",
          right: "10%",
        }}
      >
         <ul  className="main_menu">
         <DsnLink href={"crm-solution"} transitionPage={{title:"CRM Solution"}}> <li> CRM Solution</li></DsnLink>
         <DsnLink href={"creative-solution"} transitionPage={{title:"Creative Solution"}}> <li> Creative Solution</li></DsnLink>
         </ul>
        
      </div>
        <Navbar.Collapse cover="Menu">
          <Nav>{menuContent.map((item) => getSubMenu(item))}</Nav>
          <MenuContent className="section-margin" />
        </Navbar.Collapse>
    </Navbar>
  );
};

EremiaMenu.defaultProps = {
  hamburger: false,
};

export default EremiaMenu;

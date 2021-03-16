import React, { useState, useRef, useEffect } from "react";
import { links, social } from "./data";
import logo from "./logo.svg";
import "./Navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
    console.log(linksRef.current.getBoundingClientRect());
  }, [showLinks]);

  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img className='logo' src={logo} alt='logo' />
        <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
          <i className='fa fa-bars' aria-hidden='true'></i>
        </button>
      </div>
      <div
        className='links-container'
        ref={linksContainerRef}
        // className={`${
        //   showLinks ? "links-conatiner show-container" : "links-container"
        // }`}
      >
        <ul className='links' ref={linksRef}>
          {links.map((link) => {
            const { url, text, id } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className='social-icons'>
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;

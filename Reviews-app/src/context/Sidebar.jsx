import React from "react";
import { links, social } from "./data";
import logo from "./logo.svg";
export default function Sidebar() {
  return (
    <div className='sidebar show-sidebar'>
      <img src={logo} alt='' />
      <button>
        <i class='fa fa-times' aria-hidden='true'></i>
      </button>
      <div className='links-container'>
        <ul>
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className='social-container'>
        {social.map((icons) => {
          const { id, url, icon } = icons;
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

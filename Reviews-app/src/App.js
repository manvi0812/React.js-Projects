import React from "react";
// import Movies from "./hoc/Movies";
// import Counter from "./Counter";
// import Users from "./hooks/Users";
// import Posts from "./http-app/Posts";
// import Review from "./Reviews-app/Review";
// import Accordian from "./Accordian-app/Accordian";
// import Menu from "./Menu-app/Menu";
// import Tabs from "./tabs-app/Tabs";
// import Tab from "./tabs-app/Tabs-vid";
// import Main from "./Lorem-ipsum/Main";
// import Main from "./Grocery-bud/Main";
// import Navbar from "./Navbar/Navbar";
import Main from "./context/Main";
import Modal from "./context/Modal";
import Sidebar from "./context/Sidebar";

function App() {
  return <>
  <Main/>
  <Modal/>
  <Sidebar/>
  </> ;
}

export default App;

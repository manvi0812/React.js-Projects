import React, { useEffect } from "react";

const Alert = ({ msg, removeAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [list]);
  return <p>{msg}</p>;
};

export default Alert;

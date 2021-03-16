import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tabs-project";

function Tabs() {
  const [companies, setCompanies] = useState([]);
  const [index, setIndex] = useState(0);

  const getCompany = async () => {
    const { data: result } = await axios(url);
    setCompanies(result);
  };
  useEffect(() => {
    getCompany();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(index);
    setCompanies(companies.slice(amount, amount));
    setIndex(amount + 1);
  };

  return (
    <>
      <div>
        {companies.map((c) => {
          return (
            <button 
              onClick={() => setIndex(c.order)}
              onSubmit={() => handleSubmit()}
              key={c.id}>
              {c.company}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Tabs;

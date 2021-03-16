import React, { useState } from "react";
import reviews from "./data";
import "./review.css";
// import "font-awesome/css/font-awesome.css";

function Review() {
  const [index, setIndex] = useState(0); //index=0
  // const { name, job, image, text } = reviews[index];
  console.log(reviews);

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const righttCards = () => {
    console.log("handled");
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const leftCards = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomCard = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length); // we use floor method because it will give us a whole integer. [0,3]
    if (randomNumber === index) {
      // to avoid the repeatition of the number.
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <>
      <h1 className='title'>Our Reviews</h1>
      <div className='post-card'>
        {/* <img className='image' src={image} alt='' /> */}
        {/* <h4>{name}</h4> */}
        <p>{reviews[0].job}</p>
        {/* <p>{text}</p> */}
        <div className='buttons'>
          <button className='arrows' onClick={leftCards}>
            <i className='fa fa-angle-left' aria-hidden='true'></i>
          </button>
          <button className='arrows' onClick={righttCards}>
            <i className='fa fa-angle-right' aria-hidden='true'></i>
          </button>
        </div>
        <button onClick={randomCard}>surprise me</button>
      </div>
    </>
  );
}

export default Review;

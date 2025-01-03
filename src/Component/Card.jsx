import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const [isMouseOverImg, setIsMouseOverImg] = useState(false);
  const [isMouseOverBtn, setIsMouseOverBtn] = useState(false);

  function handleMouseOverImg() {
    setIsMouseOverImg(true);
  }

  function handleMouseLeaveImg() {
    setIsMouseOverImg(false);
  }

  function handleMouseOverBtn() {
    setIsMouseOverBtn(true);
  }

  function handleMouseLeaveBtn() {
    setIsMouseOverBtn(false);
  }

  return (
    <div
      className="card group max-w-sm bg-base-100 shadow hover:shadow-lg transition-shadow"
      onMouseEnter={handleMouseOverImg}
      onMouseLeave={handleMouseLeaveImg}
    >
      <img
        src={props.img}
        alt="Log Off Night 2024 image"
        className="img h-52 object-cover group-hover:opacity-80 transition rounded-t-lg "
        style={{ objectPosition: "50% 45%" }} // Corrected style
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-24">
        <button
          className="btn btn-effect bg-theme-700 text-white gap-2 max-w-44 px-8 rounded-full text-lg group-hover:block border-0 transition leading-none hover:bg-theme-800 hover:scale-110
          "
          style={{
            color: isMouseOverImg ? "white" : "transparent",
            border: "none",
            fontWeight: "bold",
            fontSize: "1.125rem",
            backgroundColor: isMouseOverImg
              ? isMouseOverBtn
                ? "#0c3137"
                : "#103f45"
              : "transparent",
            borderRadius: "9999px",
            paddingLeft: "32px",
            paddingRight: "32px",
            transform: isMouseOverBtn ? "scale(1.1)" : "scale(1)",
          }}
          onMouseEnter={handleMouseOverBtn}
          onMouseLeave={handleMouseLeaveBtn}
          onClick={() => props.onClick(props.id)}
        >
          See more
        </button>
      </div>
      <div className="card-body flex flex-row gap-4 px-6">
        <div className="flex text-center items-center text-2xl font-bold pr-4 border-r-2 border-gray-300">
          {props.date}
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="card-title text-xl font-bold">
            <a href="lon-2024">{props.name}</a>
          </h2>
          <p className="mb-2">{props.description}</p>
          <div className="card-actions mt-auto flex flex-wrap gap-2">
            <div className="badge border-0 p-3 font-bold text-white bg-theme-700 tag1">
              {props.tag1}
            </div>
            <div className="badge border-0 p-3 font-bold text-black bg-theme-100 tag2">
              {props.tag2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

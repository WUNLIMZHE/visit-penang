import React, {useState} from "react";

function Button(props){
  const [isMouseOverBtn, setIsMouseOverBtn] = useState(false);

  function handleMouseOverBtn(){
    setIsMouseOverBtn(true);
  }

  function handleMouseLeaveBtn(){
    setIsMouseOverBtn(false);
  }

  return <button className="btn btn-effect bg-theme-800 hover:bg-theme-900 text-white border-0 rounded-lg capitalize ml-1"
  onMouseEnter={handleMouseOverBtn}
  onMouseLeave={handleMouseLeaveBtn}
  onClick={props.onClick}  // Ensure onClick is properly passed here
  style={{backgroundColor: isMouseOverBtn ? "#0c3137" : "#103f45"}}>
    {props.label}
    </button>;
}

export default Button;
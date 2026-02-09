import React from "react";

function MainCoursesComponent({ img, title, desc }) {
  return (
    <div className="bg-[#FFC107] rounded-xl py-5 px-3 flex gap-3 items-center">
      <img src={img} alt="rasm bor" />
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default MainCoursesComponent;

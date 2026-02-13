// react
import React from "react";

function ChooseComponent({ img, title, desc }) {
  return (
    <div className="bg-[#FFC107] rounded-2xl py-8 px-2 flex flex-col items-center gap-3">
      <img src={img} alt="rasm bor" className="w-16" />
      <h4 className="font-black text-black text-3xl text-center">{title}</h4>
      <p className="font-black text-black text-lg text-center">{desc}</p>
      <button className="bg-black text-white text-xl cursor-pointer py-2 px-10 rounded-lg font-black">
        Boshlash
      </button>
    </div>
  );
}

export default ChooseComponent;

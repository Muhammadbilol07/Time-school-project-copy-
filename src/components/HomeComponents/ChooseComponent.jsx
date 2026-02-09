import React from "react";

function ChooseComponent({ img, title, desc }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={img} alt="Rasm bor" className="w-36" />
      <h3 className="font-normal text-white text-3xl">{title}</h3>
      <p className="font-normal text-[#666666] text-2xl w-72 mt-3">{desc}</p>
    </div>
  );
}

export default ChooseComponent;

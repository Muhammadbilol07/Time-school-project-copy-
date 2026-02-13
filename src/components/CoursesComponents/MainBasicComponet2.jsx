// react
import React from "react";
// pictures
import ToyPicture from '../../assets/pictures/CoursesPic.png'

function MainBasicComponet2() {
  return (
    <div className="h-full">
      <h3 className="text-[#FFC107] text-3xl font-black">Odamlar nimani ko’proq o’rganishni istaydi?</h3>
      <ul className="text-[#FFC107] text-3xl font-black mt-4 flex flex-col gap-4">
        <li>1-IT dasturlash kursi</li>
        <li>2-Ingliz tili kursi</li>
        <li>3-Kompyuter savodxonligi kursi</li>
      </ul>
      <img src={ToyPicture} alt="rasm bor" className="w-2xl" />
    </div>
  );
}

export default MainBasicComponet2;

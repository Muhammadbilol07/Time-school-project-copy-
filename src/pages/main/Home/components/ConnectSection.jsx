// react
import React from "react";
// pictures
import emailImg from "../../../../assets/pictures/HomeConnectSectionPic.png";
// react router dom
import { useNavigate } from "react-router-dom";

function ConnectSection() {
  const navigate = useNavigate()

  return (
    <section className="mt-16 flex justify-between items-center">
      <div className="flex flex-col gap-6">
        <h2 className="text-[#FFC107] font-black text-6xl w-96">
          Biz bilan bogʻlaning
        </h2>
        <p className="text-[#99999999] font-black text-2xl">
          Savollaringiz bormi? <br /> Biz yordam berishdan mamnunmiz!
        </p>
        <button
          onClick={() => navigate('/connection')}
          className="py-4 text-center rounded-lg text-black text-2xl font-black bg-[#FFC107] cursor-pointer w-60"
        >
          Bog'lanish
        </button>
      </div>
      <div>
        <img src={emailImg} alt="email rasm bor" className="w-full" />
      </div>
    </section>
  );
}

export default ConnectSection;

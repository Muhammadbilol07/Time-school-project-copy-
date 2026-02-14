// react
import React, { useState } from "react";

// custom hooks
import useFetch from "../../hooks/useFetch";

// icons
import { ArrowDown, ArrowUp } from "lucide-react";

// pictures
import DistributionImg from "../../assets/pictures/DistrubitionPic.png";

function ResultDistributionComponent() {
  const [showAll, setShowAll] = useState(false);

  const { data, loading, error } = useFetch(
    "https://educenter-qzud.onrender.com/educenter/v1/api/courses",
  );

  if (loading) {
    return <h3 className="text-amber-400 font-black text-3xl">Loading...</h3>;
  }

  if (error) {
    return <p className="text-red-500 font-bold">Xatolik yuz berdi!</p>;
  }

  if (data === null) return;

  const visibleData = showAll ? data : data.slice(0, 3);

  return (
    <div className="flex flex-col gap-6 mt-10">
      {visibleData.map((subject) => (
        <div key={subject.id} className="flex items-center justify-evenly">
          <h3 className="font-black text-3xl text-[#FFC107] w-60">
            {subject.course_name}
          </h3>
          <img src={DistributionImg} alt="distribution rasm" className="" />
          <p className="font-black text-3xl text-white">90%</p>
        </div>
      ))}
      <button
        className="flex items-center gap-1 mx-auto border-[3px] border-[#181818] border-solid rounded-xl py-2 px-4 cursor-pointer"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll
          ? "Kamroq natijalarni ko’rsatish"
          : "Ko’proq natijalarni ko’rsatish"}
        {showAll ? <ArrowUp /> : <ArrowDown />}
      </button>
    </div>
  );
}

export default ResultDistributionComponent;

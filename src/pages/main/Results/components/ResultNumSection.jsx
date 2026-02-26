// react
import React from "react";

// custom hooks
import useFetch from "../../../../hooks/useFetch";

function ResultNumSection() {
  const { data, loading, error } = useFetch(
    "https://educenter-7e4o.onrender.com/educenter/v1/api/result",
  );

  return (
    <section className="mt-5">
      <h2 className="font-black text-[#FFC107] text-5xl">
        Natijalarimiz raqamlarda
      </h2>
      <div className="bg-[#1A1A1A] flex items-center justify-between rounded-xl py-10 px-10 mt-10">
        {loading && <h3 className="text-amber-400 font-black">Loading...</h3>}
        {error && <p className="text-red-500 font-bold">Xatolik yuz berdi!</p>}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-[#FFC107] font-black text-5xl text-center">
            {data && data[0].graduate}+
          </h3>
          <p className="text-[#999999] font-black text-2xl text-center">
            Bitiruvchilar soni
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-[#FFC107] font-black text-5xl text-center">
            {data && data[0].goodStudents}+
          </h3>
          <p className="text-[#999999] font-black text-2xl text-center">
            mamnun o’quvchilar
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-[#FFC107] font-black text-5xl text-center">
            {data && data[0].fullProjects}+
          </h3>
          <p className="text-[#999999] font-black text-2xl text-center">
            yakunlangan loyihalar
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-[#FFC107] font-black text-5xl text-center">
            {data && data[0].partners}+
          </h3>
          <p className="text-[#999999] font-black text-2xl text-center">
            Ish beruvchi hamkorlar
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResultNumSection;

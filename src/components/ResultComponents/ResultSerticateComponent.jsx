// react
import React from "react";

// custom hooks
import useFetch from "../../hooks/useFetch";

// pictures
import sertificatePic from "../../assets/pictures/sertificatePic.png";

function ResultSerticateComponent() {
  const { data, loading, error } = useFetch(
    "https://educenter-7e4o.onrender.com/educenter/v1/api/sertificates",
  );

  if (loading) {
    return <h3 className="text-amber-400 font-black text-3xl">Loading...</h3>;
  }

  if (error) {
    return <p className="text-red-500 font-bold">Xatolik yuz berdi!</p>;
  }

  if (data === null) return;

  return (
    <div className="flex items-center justify-around mt-14">
      {data.map((sertificate) => (
        <div className="border-3 border-solid border-[#FFC107] flex flex-col items-center gap-1.5 w-72 rounded-2xl py-3 px-4 h-80">
          <img src={sertificatePic} alt="rasm bor" className="w-28" />
          <h3 className="text-center text-[#FFC107] text-2xl font-black">
            {sertificate.name}
          </h3>
          <p className="text-center text-[#999999] text-base font-black">
            {sertificate.about}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ResultSerticateComponent;

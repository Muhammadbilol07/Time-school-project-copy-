// react
import React from "react";

// custom hooks
import useFetch from "../../hooks/useFetch";

// pictures
import StudentImg from "../../assets/pictures/StudentPic.png";

function TeacherCards({ handleShowModal }) {
  const { data, loading, error } = useFetch(
    "https://educenter-qzud.onrender.com/educenter/v1/api/teachers/",
  );

  if (loading) {
    return (
      <h3 className="text-amber-400 font-black text-4xl mt-10">Loading...</h3>
    );
  }

  if (error) {
    return <p className="text-red-500 font-bold">Xatolik yuz berdi!</p>;
  }

  return (
    <div className="mt-10 grid grid-cols-3 gap-8">
      {data &&
        data.map((teacher) => (
          <div className="border-3 border-solid border-[#FFC107] flex flex-col items-center gap-3 rounded-lg py-5 px-3">
            <img src={StudentImg} alt="student" className="flex mx-auto" />
            <h3 className="text-white font-black text-2xl text-center">
              {teacher.fullName}
            </h3>
            <button
              className="bg-[#FFC107] text-black font-black text-xl py-2 px-5 rounded-lg cursor-pointer"
              onClick={() => handleShowModal(teacher)}
            >
              To’liq ma’lumot
            </button>
          </div>
        ))}
    </div>
  );
}

export default TeacherCards;

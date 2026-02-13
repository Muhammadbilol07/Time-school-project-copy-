// react
import React from "react";
// pictures
import IT_icon from "../../assets/pictures/IT_Icon.png";

function MainCoursesComponent({ data, loading, error }) {
  console.log(loading);

  if (loading) {
    return <h3 className="text-amber-400 font-black text-2xl">Loading...</h3>;
  }

  if (error) {
    return <p className="text-red-500 font-bold">Xatolik yuz berdi!</p>;
  }

  return (
    <div className="flex flex-col w-md max-h-full gap-5 overflow-y-auto border-[3px] border-[#181818] border-solid rounded-xl py-4 px-2">
      {data &&
        data.map((course) => (
          <div
            key={course.id}
            className="bg-[#FFC107] rounded-xl px-1 py-2 flex items-center"
          >
            <img src={IT_icon} alt="rasm bor" className="w-36" />
            <div>
              <h4 className="text-black font-semibold text-3xl mb-3">
                {course.course_name}
              </h4>
              <p className="text-black font-semibold text-base">
                {course.about}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default MainCoursesComponent;

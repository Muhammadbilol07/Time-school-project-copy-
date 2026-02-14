// react
import React, { useEffect } from "react";
// picture
import studentPic from "../../assets/pictures/StudentPic.png";

function TeachersComponent({ data, loading, error, setSelectedTeacher }) {
  useEffect(() => {
    if (data) {
      setSelectedTeacher(data[0]);
    }
  }, [data]);

  if (loading) {
    return <h3 className="text-amber-400 font-black">Loading...</h3>;
  }

  if (error) {
    return <p className="text-red-500 font-bold">Xatolik yuz berdi!</p>;
  }

  return (
    <div className="flex flex-col items-center gap-3 h-full pr-1 overflow-y-auto overflow-x-hidden">
      {data &&
        data.map((teacher) => (
          <div
            key={teacher.id}
            className="flex items-center gap-3 border-[3px] border-[#181818] border-solid rounded-xl py-2 px-4 cursor-pointer w-96"
            onClick={() => setSelectedTeacher(teacher)}
          >
            <img
              src={studentPic}
              alt="teacher picture"
              className="w-16 rounded-full"
            />
            <div>
              <h3 className="font-black text-xl text-[#FFC107]">
                {teacher.fullName}
              </h3>
              <h4 className="font-normal text-base text-white">
                Level: {teacher.level}
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TeachersComponent;

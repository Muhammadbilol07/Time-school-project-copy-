import React from "react";

function TeacherAboutComponent({ selectedTeacher }) {
  const teacher = selectedTeacher === undefined ? "false" : selectedTeacher;

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="w-[400px] text-white font-normal text-xl">
        {teacher.about}
      </p>
      <div className="bg-[#FFC107] w-full rounded-2xl py-2 px-5 font-normal text-black">
        <h4 className="text-4xl">{teacher.experience !== null ? teacher.experience + "+" : 0}</h4>
        <h5 className="text-2xl">Yillik tajriba</h5>
      </div>
      <div className="bg-[#111111] w-full rounded-2xl py-2 px-5 font-normal text-white">
        <h4 className="text-2xl">{teacher.goodStudents !== null ? teacher.goodStudents + "+" : 0}</h4>
        <h5 className="text-2xl">Mamnun O'quvchilar</h5>
      </div>
    </div>
  );
}

export default TeacherAboutComponent;

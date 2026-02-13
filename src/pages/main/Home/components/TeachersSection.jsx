// react
import React, { useState } from "react";
// components
import TeachersComponent from "../../../../components/HomeComponents/TeachersComponent";
import TeacherPicComponent from "../../../../components/HomeComponents/TeacherPicComponent";
// hooks
import useFetch from "../../../../hooks/useFetch";
import TeacherAboutComponent from "../../../../components/HomeComponents/TeacherAboutComponent";

function TeachersSection() {
  const { data, loading, error } = useFetch(
    "https://educenter-qzud.onrender.com/educenter/v1/api/teachers/",
  );

  const [selectedTeacher, setSelectedTeacher] = useState([]);

  return (
    <section className="font-inter py-8">
      <h2 className="font-black text-[#FFC107] text-5xl text-center">
        Bizning o'qituvchilarimiz
      </h2>
      <p className="font-black text-white text-xl text-center mt-4">
        Haqiqiy qahramonlarimiz, quyida ular bilan tanishib chiqishingiz mumkin
      </p>
      <div className="w-full flex justify-between mt-10 h-[28rem] border-[3px] border-[#181818] border-solid rounded-xl py-4 px-8">
        <TeachersComponent
          data={data}
          loading={loading}
          error={error}
          setSelectedTeacher={setSelectedTeacher}
        />
        <TeacherPicComponent selectedTeacher={selectedTeacher} />
        <TeacherAboutComponent selectedTeacher={selectedTeacher} />
      </div>
    </section>
  );
}

export default TeachersSection;

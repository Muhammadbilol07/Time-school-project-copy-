// react
import React from "react";
// custom hook
import useFetch from "../../../../hooks/useFetch";
// components
import MainCoursesComponent from "../../../../components/CoursesComponents/MainCoursesComponent";
import MainBasicComponet2 from "../../../../components/CoursesComponents/MainBasicComponet2";

function BasicSection() {
  const { data, loading, error } = useFetch(
    "https://educenter-qzud.onrender.com/educenter/v1/api/maincourses/",
  );

  return (
    <section className="mt-10 flex items-center justify-between w-full">
      <div className="w-full">
        <h3 className="font-semibold text-[#FFC107] text-5xl">
          Asosiy Kurslar
        </h3>
        <div className="mt-8 flex justify-between h-[53rem]">
          <MainCoursesComponent data={data} loading={loading} error={error} />
          <MainBasicComponet2 />
        </div>
      </div>
    </section>
  );
}

export default BasicSection;

// react
import React from "react";
// custom hook
import useFetch from "../../../../hooks/useFetch";
import MainCoursesComponent from "../../../../components/CoursesComponents/MainCoursesComponent";

function BasicSection() {
  const { data, loading, error } = useFetch(
    "https://educenter-qzud.onrender.com/educenter/v1/api/maincourses/",
  );

  return (
    <section className="mt-10 flex items-center justify-between">
      <div className="w-96">
        <h3 className="font-semibold text-[#FFC107] text-5xl">
          Asosiy Kurslar
        </h3>
        <div className="mt-8 flex flex-col gap-5">
          {data &&
            data.map((course) => (
              <MainCoursesComponent
                key={course.id}
                img={course.imgUrl}
                title={course.course_name}
                desc={course.about}
              />
            ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default BasicSection;

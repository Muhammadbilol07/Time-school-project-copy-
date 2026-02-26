// react
import React from "react";
// components
import AllCoursesComponent from "../../../../components/CoursesComponents/AllCoursesComponent";

// useFetch
import useFetch from "../../../../hooks/useFetch";

function AllCoursesSection() {
  const { data, loading, error } = useFetch(
    "https://educenter-7e4o.onrender.com/educenter/v1/api/courses",
  );

  return (
    <section className="mt-14">
      <h3 className="font-black text-5xl text-[#FFC107]">
        Bizning barcha kurslarimiz
      </h3>
      <div>
        <AllCoursesComponent data={data} loading={loading} error={error} />
      </div>
    </section>
  );
}

export default AllCoursesSection;

// react
import React from "react";

// components
import IntroSection from "./components/IntroSection";
import BasicSection from "./components/BasicSection";
import AllCoursesSection from "./components/AllCoursesSection";
import ChooseSection from "./components/ChooseSection";

function Course() {
  return (
    <>
      <IntroSection />
      <BasicSection />
      <AllCoursesSection />
      <ChooseSection />
    </>
  );
}

export default Course;

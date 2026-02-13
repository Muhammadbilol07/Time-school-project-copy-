// react
// react
import React from "react";
// pictures
import webGeneralIcon from '../../assets/pictures/timeSchoolGeneralLogo.png'

function TeacherPicComponent() {
  return (
    <div className="w-[350px] h-full bg-[#FFC107] rounded-xl">
      <img
        src={webGeneralIcon}
        alt="teacher picture"
        className="w-full h-full object-cover object-center rounded-xl"
      />
    </div>
  );
}

export default TeacherPicComponent;

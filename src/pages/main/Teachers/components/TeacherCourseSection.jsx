// react
import React, { useState } from "react";

// components
import TeacherCards from "../../../../components/TeachersComponents/TeacherCards";
import TeacherModal from "../../../../components/TeachersComponents/TeacherModal";

function TeacherCourseSection() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (teacher) => {
    setSelectedTeacher(teacher);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedTeacher(null);
    setShowModal(false);
  };

  return (
    <section className="mt-10 mb-48">
      <h2 className="font-black text-[#FFC107] text-4xl">
        Bizda dars beruvchi o'qituvchilar:
      </h2>
      <TeacherCards handleShowModal={handleShowModal} />
      <TeacherModal
        selectedTeacher={selectedTeacher}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
    </section>
  );
}

export default TeacherCourseSection;

// react
import React, { useEffect } from "react";

// icons
import { X } from "lucide-react";

function TeacherModal({ selectedTeacher, showModal, handleCloseModal }) {
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal, selectedTeacher]);

  useEffect(() => {
    const handleKeyEsc = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };

    if (showModal) {
      window.addEventListener("keydown", handleKeyEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyEsc);
    };
  }, [showModal, handleCloseModal]);

  if (!showModal || !selectedTeacher) return null;

  return (
    <div className="fixed bg-black/60 z-[1000] inset-0 flex justify-center items-center">
      <div className="bg-[#FFC107] w-3xl h-[28rem] rounded-lg py-12 px-10 relative">
        <button
          className="text-black absolute right-5 top-3 cursor-pointer"
          onClick={handleCloseModal}
        >
          <X size={50} />
        </button>
        <h2 className="text-black font-black text-4xl">
          {selectedTeacher.fullName}
        </h2>
        <div className="text-black font-black text-3xl mt-7 flex flex-col gap-1.5">
          <div className="flex justify-between border-3 border-solid border-black py-3 px-4">
            <h3>Bilim darajasi:</h3>
            <h3>{selectedTeacher.level}</h3>
          </div>
          <div className="flex justify-between border-3 border-solid border-black py-3 px-4">
            <h3>Yillik tajribasi:</h3>
            <h3>{selectedTeacher.experience}</h3>
          </div>
          <div className="flex justify-between border-3 border-solid border-black py-3 px-4">
            <h3>O’quvchilari soni:</h3>
            <h3>{selectedTeacher.students}</h3>
          </div>
          <div className="flex justify-between border-3 border-solid border-black py-3 px-4">
            <h3>natija ko’rsatgan o’quvchilari:</h3>
            <h3>{selectedTeacher.goodStudents}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherModal;

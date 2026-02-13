// react
import React from "react";

// components
import ChooseComponent from "../../../../components/CoursesComponents/ChooseComponent";

// pictures
import correct_icon from "../../../../assets/pictures/correct_icon.png";
import video_icon from "../../../../assets/pictures/video_icon.png";
import sertificate_icon from "../../../../assets/pictures/certificate_icon.png";
import file_icon from "../../../../assets/pictures/file_icon.png";

function ChooseSection() {
  return (
    <section className="mt-14 mb-20">
      <h3 className="text-[#FFC107] font-black text-5xl">
        Nima uchun bizni tanlashadi?
      </h3>
      <div className="grid grid-cols-2 gap-x-52 gap-y-14 mx-auto justify-center mt-10">
        <ChooseComponent
          img={correct_icon}
          title="Tajribali o‘qituvchilar"
          desc="O‘z sohasining mutaxassislari tomonidan dars beriladi"
        />
        <ChooseComponent
          img={video_icon}
          title="Qulay o‘rganish"
          desc="Har qanday vaqtda va joyda o‘rganish imkoniyati"
        />
        <ChooseComponent
          img={sertificate_icon}
          title="Sertifikat olish"
          desc="Kursni muvaffaqiyatli tugatganlarga rasmiy sertifikat taqdim etiladi"
        />
        <ChooseComponent
          img={file_icon}
          title="Amaliy loyihalar orqali o‘rganish"
          desc="Nazariyani amalda sinab ko‘rib, haqiqiy tajriba orttirasiz"
        />
      </div>
    </section>
  );
}

export default ChooseSection;

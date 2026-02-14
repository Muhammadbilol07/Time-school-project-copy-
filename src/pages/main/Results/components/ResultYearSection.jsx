// react
import React from "react";

// pictures
import DiagrammaImg from "../../../../assets/pictures/Diagramma.png"

function ResultYearSection() {
  return (
    <section className="mt-14">
      <h2 className="font-black text-[#FFC107] text-5xl">
        Bizning yillik muvaffaqiyat foizimiz
      </h2>
      <img src={DiagrammaImg} alt="diagramma rasm" className="w-full mt-10 rounded-xl" />
    </section>
  );
}

export default ResultYearSection;

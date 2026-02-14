// react
import React from "react";

// components
import ResultDistributionComponent from "../../../../components/ResultComponents/ResultDistributionComponent";

function ResultDistributionSection() {
  return (
    <section className="mt-14">
      <h2 className="font-black text-[#FFC107] text-5xl">
        Fanlar bo‘yicha natijalar taqsimoti
      </h2>
      <ResultDistributionComponent />
    </section>
  );
}

export default ResultDistributionSection;

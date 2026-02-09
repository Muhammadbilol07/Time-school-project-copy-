import sectionImage from "../../../../assets/pictures/HomeSectionAdverb.png";

function AdverbSection() {
  return (
    <section className="min-h-[610px]">
      <div className="bg-[#FFC107] min-w-full absolute left-0 py-14 font-inter">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-full flex flex-col gap-2">
            <h2 className="font-black text-[#070707ED] text-9xl w-[600px] mb-4">
              Time School
            </h2>
            <p className="font-bold text-2xl text-[#FFFFFFBF] w-[500px]">
              Biz bilan bilim olish vaqtingizni eng samarali tarzda tashkil
              qiling.
            </p>
            <p className="font-black text-xl text-[#000000BF] w-[400px]">
              Hayotingizni o‘zgartirishni bugundan boshlang!
            </p>
            <button className="py-3 bg-black rounded-lg text-xl font-medium text-white w-64 cursor-pointer shadow-[0px_1px_2px_0px_#0000000D]">
              Boshlash
            </button>
          </div>
          <img
            src={sectionImage}
            alt="Bu rasm"
            className="w-[1200px] h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

export default AdverbSection;

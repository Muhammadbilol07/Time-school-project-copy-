// components > HomeComponent
import ChooseComponent from "../../../../components/HomeComponents/ChooseComponent";

// assets > pictures
import StudentPic from "../../../../assets/pictures/StudentPic.png";

function ChooseSection() {
  return (
    <section className="font-inter pt-8 pb-20">
      <h2 className="text-center text-[#FFC107] font-black text-5xl">
        Nega Aynan Time School?
      </h2>
      <p className="text-center text-white text-xl mt-6 font-black">
        Nega aynan Time School? Vaqtingizni samarali boshqaring, sifatli ta’lim
        oling.
      </p>
      <div className="flex items-center justify-around mt-20">
        <ChooseComponent
          img={StudentPic}
          title="Vaqtni boshqarish tizimi"
          desc="O‘quv rejangizni avtomatik rejalashtiring va har bir soatdan to‘liq foydalaning."
        />
        <ChooseComponent
          img={StudentPic}
          title="Vaqtni boshqarish tizimi"
          desc="O‘quv rejangizni avtomatik rejalashtiring va har bir soatdan to‘liq foydalaning."
        />
        <ChooseComponent
          img={StudentPic}
          title="Vaqtni boshqarish tizimi"
          desc="O‘quv rejangizni avtomatik rejalashtiring va har bir soatdan to‘liq foydalaning."
        />
      </div>
    </section>
  );
}

export default ChooseSection;

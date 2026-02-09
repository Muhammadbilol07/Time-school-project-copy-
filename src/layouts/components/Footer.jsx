// react
import React from "react";
// pictures
import GeneralLogo from "../../assets/pictures/timeSchoolGeneralLogo.png";
// lucide react icons
import { Instagram, Facebook, Send } from "lucide-react";
function Footer() {
  return (
    <footer className="font-inter">
      <div className="bg-[rgb(255,193,7)] w-full py-10">
        <div className="container mx-auto grid grid-cols-7">
          <div className="flex items-center col-span-2">
            <img src={GeneralLogo} alt="time school logo" className="w-24" />
            <h2 className="text-black text-4xl font-black">Time School</h2>
          </div>
          <div className="col-span-1">
            <h3 className="text-black font-black text-3xl">Sahifalar</h3>
            <ul className="flex flex-col gap-4 mt-5">
              <li className="font-medium text-black text-2xl">Kurslar</li>
              <li className="font-medium text-black text-2xl">Natijalar</li>
              <li className="font-medium text-black text-2xl">Fikrlar</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-black font-black text-3xl">
              Biz bilan Bog'laning
            </h3>
            <p className="text-white mt-5 font-black text-xl py-2 bg-black rounded-xl w-64 text-center">
              +998 99 999 99 99
            </p>
          </div>
          <div className="col-span-2">
            <h3 className="text-black font-black text-3xl">
              Ijtimoiy tarmoqlarimiz
            </h3>
            <ul className="flex items-center gap-3 mt-5">
              <a
                href="https://instagram.com/"
                className="text-[#FFC107] bg-black p-1 rounded-full"
              >
                <Instagram size={33} />
              </a>
              <a
                href="https://t.me/"
                className="text-[#FFC107] bg-black p-1 rounded-full"
              >
                <Send size={33} />
              </a>
              <a
                href="https://facebook.com/"
                className="text-[#FFC107] bg-black p-1 rounded-full"
              >
                <Facebook size={33} />
              </a>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-white font-medium text-2xl">
        <small>© 2025 Time School. Barcha huquqlar himoyalangan.</small>
      </p>
    </footer>
  );
}

export default Footer;

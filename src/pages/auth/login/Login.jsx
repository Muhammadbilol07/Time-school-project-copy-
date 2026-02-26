// react
import { useState } from "react";
// pictures
import logoPicture from "../../../assets/pictures/timeSchoolGeneralLogo.png";
// axios
import axios from "axios";
// context
import { useAuth } from "../../../context/AuthContext";

function Login() {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);

  const { login } = useAuth();

  const handleChangeInput = (e) => {
    e.target.name === "phoneNumber"
      ? setPhoneNumber(e.target.value)
      : setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://educenter-7e4o.onrender.com/educenter/v1/api/admin/login",
        {
          phone: phoneNumber,
          password: password,
        },
      );

      const { token } = res.data;
      login(token);
      alert("Akkauntga muvaffaqqiyatli kirildi🎉🎉🎉");
    } catch (error) {
        setLoading(false);
        console.error(error);
        alert(
            "Afsus, Tizimga kirish muvaffaqqiyatsiz yakunlandi \n Iltimos qaytadan urinib koring",
        );
    } finally {
        setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center mx-auto font-inter mb-24">
      <div className="flex items-center">
        <img src={logoPicture} alt="rasm bor" className="w-28" />
        <h2 className="text-[#FFC107] font-black text-3xl">Time School</h2>
      </div>

      <form
        className="border-[3px] border-[#FFC107] border-solid rounded-xl py-5 px-8 flex flex-col items-center gap-5"
        onSubmit={handleLogin}
      >
        <h3 className="text-[#FFC107] font-black text-2xl">Tizimga kirish</h3>
        <input
          type="text"
          placeholder="Telefon raqam..."
          className="border-[3px] border-[#FFC107] border-solid rounded-xl py-2 px-4 w-80 outline-0"
          onChange={handleChangeInput}
          name="phoneNumber"
        />
        <input
          type="text"
          placeholder="parolingizni kiriting..."
          className="border-[3px] border-[#FFC107] border-solid rounded-xl py-2 px-4 w-80 outline-0"
          onChange={handleChangeInput}
          name="password"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-1 rounded-lg text-black text-lg font-black ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#FFC107] cursor-pointer" 
          }`}
          
        >
          {loading ? "Tizimga kirilmoqda..." : "Yuborish"}
        </button>
      </form>
    </section>
  );
}

export default Login;

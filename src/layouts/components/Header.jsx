// react router dom
import { NavLink, useNavigate } from "react-router-dom";

// pictures
import logoPicture from "../../assets/pictures/timeSchoolGeneralLogo.png";

// context
import { useAuth } from "../../context/AuthContext";

// icons
import { LogIn, User } from "lucide-react";

function Header() {
  const { user, logOut } = useAuth();

  const navigate = useNavigate();

  return (
    <header className="font-inter container mx-auto">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logoPicture}
            alt="Bu rasm bu saytning logosi hisoblanadi"
            className="w-28"
          />
          <h1 className="font-black text-xl text-[#FFC107]">Time School</h1>
        </div>
        {user && (
          <ul className="flex items-center gap-6">
            <li className="font-medium text-lg text-white">
              <NavLink to="/">Bosh sahifa</NavLink>
            </li>
            <li className="font-medium text-lg text-white">
              <NavLink to="/courses">Kurslar</NavLink>
            </li>
            <li className="font-medium text-lg text-white">
              <NavLink to="/results">Natijalar</NavLink>
            </li>
            <li className="font-medium text-lg text-white">
              <NavLink to="/teachers">O'qituvchilar</NavLink>
            </li>
            <button
              onClick={() => navigate("/connection")}
              className="py-2 px-4 rounded-lg text-black text-lg font-medium bg-[#FFC107] cursor-pointer"
            >
              Bog'lanish
            </button>
            <button
              className="border-[3px] border-[#181818] border-solid rounded-xl py-2 px-4 cursor-pointer"
              onClick={() => logOut()}
            >
              Akkauntdan Chiqish
            </button>
          </ul>
        )}
        {!user && (
          <ul className="flex items-center gap-6">
            <li className="font-medium text-lg text-white border-[3px] border-[#181818] border-solid rounded-xl py-2 px-4 cursor-pointer">
              <NavLink to="/login" className="flex items-center gap-2">
                Tizimga kirish
                <LogIn />
              </NavLink>
            </li>
            <li className="font-medium text-lg text-white border-[3px] border-[#181818] border-solid rounded-xl py-2 px-4 cursor-pointer">
              <NavLink to="/register" className="flex items-center gap-2">
                Ro'yxatdan o'tish
                <User />
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;

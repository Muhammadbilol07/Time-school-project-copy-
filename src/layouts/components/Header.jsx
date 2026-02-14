// react router dom
import { NavLink, useNavigate } from "react-router-dom";

// pictures
import logoPicture from "../../assets/pictures/timeSchoolGeneralLogo.png";

// context
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { user, logOut } = useAuth();

  const navigate = useNavigate()

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
            <NavLink to="/">Ro'yxatdan o'tish</NavLink>
          </li>
          <button
            onClick={() => navigate("/connection")}
            className="py-2 px-4 rounded-lg text-black text-lg font-medium bg-[#FFC107] cursor-pointer"
          >
            Bog'lanish
          </button>
          {user && (
            <button
              className="border-[3px] border-[#181818] border-solid rounded-xl py-2 px-4 cursor-pointer"
              onClick={() => logOut()}
            >
              Akkauntdan Chiqish
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

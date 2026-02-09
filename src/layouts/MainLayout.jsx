// react-router-dom
import { Outlet } from "react-router-dom";

// layouts > components
import Header from "./components/Header";
import Footer from "./components/Footer";

function MainLayout() {
  return (
    <>
      <Header />

      <div className="container mx-auto">
        <main className="font-inter">
          <Outlet />
        </main>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;

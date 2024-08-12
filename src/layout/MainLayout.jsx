import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="w-[1440px] m-auto flex">
        <Sidebar></Sidebar>
        <main className="w-[1080px]">
          <Navbar></Navbar>
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default MainLayout;

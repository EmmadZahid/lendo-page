import { NavLink } from "react-router-dom";
import AvatarIcon from "../assets/Avatar.png";
import { Notificaiton } from "../components/Notification";
import "./Navbar.scss";

export const Navbar = () => {
  const linkClass = (params) => {
    return params.isActive
      ? "flex items-center relative active"
      : "flex items-center relative";
  };
  return (
    <>
      <div className="w-full h-[132px] px-[40px]">
        <div className="border-b-[1px] border-gray h-full flex justify-between pl-[35px] pr-[18px]">
          <div className="flex gap-16">
            <NavLink to="/overview" className={linkClass}>
              <span>Overview</span>
              <NavBorder></NavBorder>
            </NavLink>
            <NavLink to="/invest" className={linkClass}>
              <span>Invest</span>
              <NavBorder></NavBorder>
            </NavLink>
            <NavLink to="/auto-investment" className={linkClass}>
              <span>Auto-invest</span>
              <NavBorder></NavBorder>
            </NavLink>
            <NavLink to="portfolio" className={linkClass}>
              <span>My Portfolio</span>
              <NavBorder></NavBorder>
            </NavLink>
          </div>
          <div className="flex gap-10">
            <div className="flex items-center">
              <span className="text-gray-700">En</span>
            </div>
            <div className="flex items-center">
              <Notificaiton count={2}></Notificaiton>
            </div>
            <div className="flex items-center">
              <img src={AvatarIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavBorder = () => {
  return (
    <div className="nav-border bg-lendo-primary w-[24px] h-[4px] absolute left-0 bottom-0 rounded"></div>
  );
};

import notificationIcon from "../assets/notification.png";
export const Notificaiton = ({ count }) => {
  return (
    <div className="relative">
      <img src={notificationIcon} alt="" />
      <div className="right-[-9px] top-[12px] border-2 bg-lendo-primary w-[20px] h-[20px] text-white text-[10px] absolute rounded-full border-white text-center">
        {count}
      </div>
    </div>
  );
};

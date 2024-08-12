import classNames from "classnames";
import "./button.scss";
export const Button = ({ btnType, text, onClick, className }) => {
  const btnClasses = classNames({
    "h-12 px-4 text-sm px-6 text-center cursor-pointer": true,
    "rounded-[42px]": true,
    "text-white": btnType == "primary" || btnType == "secondary",
    "text-black normal-btn": btnType == "normal",
    "bg-lendo-primary": btnType == "primary",
    "bg-lendo-secondary": btnType == "secondary",
  });
  return (
    <>
      <button
        className={btnClasses.concat(" ").concat(className)}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

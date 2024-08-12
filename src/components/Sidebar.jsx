import { InterestRateBox } from "./InterestRateBox";
import { Button } from "./ui/button";
import balanceLogo from "../assets/balance.png";
import arrowRight from "../assets/arrow-right.png";
import warningIcon from "../assets/warning.png";
import personLogo from "../assets/person.svg";

export const Sidebar = () => {
  return (
    <aside className="w-[360px] px-[40px] flex flex-col mt-[18px]">
      <InterestRateBox className={"ml-[30px]"} size="sm"></InterestRateBox>
      <div className="border-t-[1px] border-b-[1px] border-gray py-[60px] px-[25px] mt-[10px] relative">
        <div className="h-full w-[1px] bg-gray absolute right-[-40px] top-0"></div>
        <div className="flex">
          <img src={balanceLogo} alt="" />
          <div className="flex flex-col flex-1 ml-[10px]">
            <span className="text-lg font-bold">62,540 SAR</span>
            <div className="flex justify-between items-center flex-1">
              <div className="text-sm">Account Balance</div>
              <img src={arrowRight} alt="" />
            </div>
          </div>
        </div>
        <div className="flex gap-1 mt-[24px]">
          <Button
            btnType="primary"
            text={"Deposit"}
            className="flex-1"
          ></Button>
          <Button
            btnType="normal"
            text={"Withdraw"}
            className="flex-1"
          ></Button>
        </div>

        <div className="mt-[40px] flex gap-2">
          <img
            src={warningIcon}
            alt=""
            className="w-[20px] h-[20px] mt-[5px]"
          />
          <div className="text-gray-700 text-sm drop-shadow-lg">
            To withdraw more than <span className="font-bold">10,000 SAR</span>{" "}
            you need to <span className="font-bold">verify</span> your banking
            account.
          </div>
        </div>
      </div>
      <div className="py-[73px] px-[40px]">
        <img src={personLogo} alt="" />
        <div className="mt-[40px] flex flex-col">
          <div className="font-bold">Why should you trust it?</div>
          <div className="text-center text-sm mt-[20px] text-gray-700">
            Because of this and that.
          </div>
          <div className="text-center text-sm text-gray-700">
            Anyway investing is very good
          </div>
        </div>
      </div>
    </aside>
  );
};

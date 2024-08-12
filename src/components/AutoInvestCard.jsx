import { InterestRateBox } from "./InterestRateBox";
import { Button } from "./ui/button";
export const AutoInvestCard = () => {
  return (
    <div className="border-[1px] border-gray p-[40px] flex rounded-lg mt-[-1px]">
      <InterestRateBox size="lg"></InterestRateBox>
      <div className="flex flex-1 flex-col ml-[80px] justify-center">
        <div className="flex gap-24">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-green">Active</div>
            <div className="text-gray-700 text-sm">Status</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold">1500 SAR</div>
            <div className="text-gray-700 text-sm">Max. Investment</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold">26</div>
            <div className="text-gray-700 text-sm">Loans Funded</div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[34px]">
          <div className="text-gray-700 text-sm">
            * Strategy started at 20th March 2021
          </div>
          <div className="flex gap-2">
            <Button btnType="secondary" text={"Stop"}></Button>
            <Button btnType="normal" text={"Change Settings"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

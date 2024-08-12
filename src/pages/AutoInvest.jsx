import { AutoInvestCard } from "../components/AutoInvestCard";
import { BarGraphCard } from "../components/BarGraphCard";
import { DoughnutGraphCard } from "../components/DoughutGraphCard";
import { Faqs } from "../components/Faqs";
export const AutoInvestPage = () => {
  return (
    <div className="px-[62px]">
      <AutoInvestCard></AutoInvestCard>
      <div className="flex flex-1 gap-8 mt-[32px]">
        <BarGraphCard className="flex-1"></BarGraphCard>
        <DoughnutGraphCard className="flex-1"></DoughnutGraphCard>
      </div>
      <Faqs></Faqs>
    </div>
  );
};

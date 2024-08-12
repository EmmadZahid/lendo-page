import barGraph from "../assets/bar-graph.png";
import barGraphInfo from "../assets/bar-graph-info.png";
import helpIcon from "../assets/help.png";
export const BarGraphCard = ({ className }) => {
  return (
    <div
      className={`border-[1px] border-gray px-[48px] pt-[40px] rounded-lg ${className}`}
    >
      <div className="text-2xl flex items-center gap-2">
        <div>Invested</div>
        <img src={helpIcon} alt="" />
      </div>
      <div className="text-center flex flex-col items-center">
        <img className="w-full mt-[40px]" src={barGraph} />
        <img className="mt-[32px]" src={barGraphInfo} />
      </div>
    </div>
  );
};

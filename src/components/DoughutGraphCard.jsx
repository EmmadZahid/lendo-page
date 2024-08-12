import doughnutGraph from "../assets/doughnut-graph.png";
import doughnutInfo from "../assets/doughnut-info.png";
export const DoughnutGraphCard = ({ className }) => {
  return (
    <div
      className={`border-[1px] border-gray px-[48px] py-[48px] rounded-lg ${className}`}
    >
      <div className="text-2xl">
        Excepted Risk Score<br></br> Distribution
      </div>
      <div className="mt-[40px] flex items-center">
        <img className="" src={doughnutGraph} />
        <img className="ml-[64px]" src={doughnutInfo} />
      </div>
    </div>
  );
};

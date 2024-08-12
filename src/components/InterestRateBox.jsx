import "./InterestRateBox.scss";
export const InterestRateBox = ({ className, size = "lg" }) => {
  return (
    <div
      className={`rounded-[16px] bg-lendo-primary interest-rate-box ${size} ${className}`}
    >
      <div>Conservative</div>
      <div className="font-bold">10-14%</div>
      <div>Interest Rate</div>
    </div>
  );
};

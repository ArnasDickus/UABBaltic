import Flags from "country-flag-icons/react/3x2";

type FlagProps = {
  countryCode: string;
};

const Flag = ({ countryCode }: FlagProps) => {
  const FlagComponent = Flags[countryCode.toUpperCase() as keyof typeof Flags];
  return (
    <div className="w-10">
      <FlagComponent />
    </div>
  );
};

export default Flag;

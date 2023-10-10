import Button from "@/components/button/button";

interface ICard {
  title: string;
  buttonText: string;
  description: string;
  heroText: string | number;
  onClick: () => void;
}

const Card = ({ title, description, heroText, onClick, buttonText }: ICard) => {
  return (
    <>
      <div className="max-w-sm p-4 w-52 rounded overflow-hidden shadow-lg flex flex-col justify-between">
        {heroText}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <Button onClick={onClick}>{buttonText}</Button>
      </div>
    </>
  );
};
export default Card;

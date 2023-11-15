import Link from "next/link";
import Button from "../button/button";

export interface IProjectCard {
  title: string;
  description: string;
  linkTitle: string;
  link: string;
}

const ProjectCard = ({ title, description, link, linkTitle }: IProjectCard) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg pb-5">
      {/* <img
        className="w-full"
        src="/img/card-top.jpg"
        alt="Sunset in the mountains"
      /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="w-full text-center">
        <Button>
          {/* @ts-ignore */}
          <Link href={link} target="_blank">
            {linkTitle}
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default ProjectCard;

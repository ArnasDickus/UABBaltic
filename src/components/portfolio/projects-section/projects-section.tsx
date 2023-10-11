import Link from "next/link";

const ProjectsSection = ({ language }: { language: string }) => {
  return (
    <section>
      <h2>ProjectsSection</h2>
      <p>Swapi Project</p>
      <Link href={`/${language}/portfolio/projects/swapi`}>Swapi Link</Link>
      <hr />
    </section>
  );
};
export default ProjectsSection;

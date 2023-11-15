import { useTranslation } from "@/app/i18n";
import ProjectCard, {
  IProjectCard,
} from "@/components/project-card/project-card";
import { sectionHeader } from "@/styles/reusable-styles";

const ProjectsSection = async ({ language }: { language: string }) => {
  const { t } = await useTranslation({ language, ns: "portfolio" });

  const projects: IProjectCard[] = [
    {
      title: t("swapi"),
      description: t("swapiDescription"),
      link: `/${language}/portfolio/projects/swapi`,
      linkTitle: t("demo"),
    },
  ];

  return (
    <section className="pt-10" id="projects-section">
      <h2 className={sectionHeader}>{t("projects")}</h2>
      <div className="w-full flex justify-center">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
export default ProjectsSection;

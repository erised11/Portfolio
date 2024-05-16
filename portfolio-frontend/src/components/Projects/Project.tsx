import Typewriter from "typewriter-effect";

export interface ProjectInterface {
  title: string;
  description: string;
  skills: string[];
  date_completed: string;
  repo_link: string;
  image_url: string;
}

type ProjectProps = {
  project: ProjectInterface;
};

const projectClickHandler = (repoLink: string) => {
  window.location.href = repoLink;
};

const Project = ({ project }: ProjectProps) => {
  return (
    <div
      onClick={() => projectClickHandler(project.repo_link)}
      className="flex flex-col mb-12 last:mb-0 hover:scale-105 transform duration-200 rounded-xl hover:cursor-pointer"
    >
      <h2 className="font-bold underline text-2xl pb-6">
        <Typewriter
          onInit={(typewriter: any) => {
            const { cursor } = typewriter.state.elements;
            typewriter
              .changeDelay(10)
              .typeString(project.title)
              .callFunction(() => cursor.setAttribute("hidden", "hidden"))
              .start();
          }}
        />
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={project.image_url}
          className="h-48 w-48 object-cover rounded-xl shadow-3d-small"
        />
        <div>
          <p className="text-gray-300">{project.description}</p>
          <p>Skills involved: {project.skills.join(", ")}</p>
          <p>Date completed: {project.date_completed} </p>
          <p>Repository link: {project.repo_link}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;

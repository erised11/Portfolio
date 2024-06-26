import Typewriter from "typewriter-effect";
import Project from "../components/Projects/Project";
import { PROJECTS } from "../components/Projects/projects_list";

const Portfolio = () => {
  return (
    <div className="bg-gray-500 w-full text-white px-10 py-12 shadow-3d rounded-b-xl">
      <h1 className="text-6xl">
        <Typewriter
          onInit={(typewriter: any) => {
            const { cursor } = typewriter.state.elements;
            typewriter
              .changeDelay(30)
              .typeString("Portfolio")
              .callFunction(() => cursor.setAttribute("hidden", "hidden"))
              .start();
          }}
        />
      </h1>
      <p className="text-xl mt-4 mb-8 pb-4 border-b-2">
        Here all personal AI/Frontend projects created by Brandon.
      </p>
      {PROJECTS.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;

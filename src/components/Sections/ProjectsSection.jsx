import Button from "../Button/Button";

const ProjectCard = ({ title, subtitle, description, children }) => {
  return (
    <div className=" flex flex-col lg:flex-row px-4 lg:px-0 w-full h-full ">
      <div className=" flex w-full pb-10">{children}</div>
    </div>
  );
};

export default ProjectCard;

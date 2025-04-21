interface ProjectCardProps {
  title: string,
  image: string,
  projectName: string,
  description: string,
}

export default function ProjectCard({
  title,
  image,
  projectName,
  description
}: ProjectCardProps) {
  return (
    <div className="w-[340px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary" >
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={projectName}
          className="w-full h-full object-cover "
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-accent-green">
          {title}
        </span>
        <div className="flex flex-col">
          <span className="text-white font-bold text-xl">
            {projectName}
          </span>
          <span className="text-content-body text-sm">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}
import ProjectCard from "../commons/ProjectCard";
import TotalVisits from "../commons/TotalVisits";
import UserCard from "../commons/UserCard";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

export default function Hero() {
  return (
    <div className="flex h-screen gap-5">
      <div className="w-full flex flex-col gap-2 mt-[32vh]">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Seus projetos e redes sociais em um único link
        </h1>
        <h2 className="text-xl leading-6">
          Crie sua própria página de projetos e compartilhe com o mundo <br />
          Acompanhe o engajamento com Analytics de cliques
        </h2>
        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl">projectinbio.com</span>
          <TextInput placeholder="Seu link" />
          <Button>Criar agora</Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#420888,transparent_55%)]">
        <div className="relative">
          <UserCard />
          <div className="absolute -bottom-[5%] -right-[45%]">
            <TotalVisits />
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            <ProjectCard title="10 cliques" image="/project1.jpg" projectName="Projeto 1" description="Descrição detalhada do que o projeto faz." />
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
            <ProjectCard title="50 cliques" image="/project2.jpg" projectName="Projeto 2" description="Descrição detalhada do que o projeto faz." />
          </div>
        </div>
      </div>
    </div>
  );
}
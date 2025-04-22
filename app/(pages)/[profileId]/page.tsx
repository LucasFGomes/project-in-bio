import ProjectCard from "@/app/components/commons/ProjectCard";
import TotalVisits from "@/app/components/commons/TotalVisits";
import UserCard from "@/app/components/commons/UserCard";
import { getProfileData } from "@/app/server/get-profile-data";
import { Plus } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProfilePage({
  params
}: {
  params: Promise<{ profileId: string }>
}) {
  const { profileId } = await params;

  const profileData = await getProfileData(profileId)

  if (!profileData) return notFound()

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
        <span>Você está usando a versão gratuita.</span>
        <Link href={`/${profileId}/upgrade`}>
          <button className="text-accent-green font-bold cursor-pointer">Faça o upgrade agora mesmo!</button>
        </Link>
      </div>

      <div className="w-1/2 flex justify-center h-min">
        <UserCard />
      </div>

      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        <ProjectCard title="10 cliques" image="/project1.jpg" projectName="Projeto 1" description="Descrição detalhada do que o projeto faz." />
        <ProjectCard title="20 cliques" image="/project2.jpg" projectName="Projeto 2" description="Descrição detalhada do que o projeto faz." />
        <ProjectCard title="10 cliques" image="/project1.jpg" projectName="Projeto 1" description="Descrição detalhada do que o projeto faz." />
        <ProjectCard title="20 cliques" image="/project2.jpg" projectName="Projeto 2" description="Descrição detalhada do que o projeto faz." />
        <ProjectCard title="10 cliques" image="/project1.jpg" projectName="Projeto 1" description="Descrição detalhada do que o projeto faz." />
        <ProjectCard title="20 cliques" image="/project2.jpg" projectName="Projeto 2" description="Descrição detalhada do que o projeto faz." />
        <ProjectCard title="10 cliques" image="/project1.jpg" projectName="Projeto 1" description="Descrição detalhada do que o projeto faz." />
        <button className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center cursor-pointer hover:border border-dashed border-border-secondary">
          <Plus className="size-10 text-accent-green" />
          <span className="text-white">Novo projeto</span>
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
        <TotalVisits />
      </div>
    </div>
  )
}
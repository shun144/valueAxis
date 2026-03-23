import ProjectDetail from "@/features/project/components/project-detail";
import { notFound } from "next/navigation";
import { projectDetails } from "@/features/project/constants/projects";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: Props) {
  const { id } = await params;

  const projectDetail = projectDetails.find((x) => String(x.id) === id);
  if (!projectDetail) {
    return notFound();
  }

  return <ProjectDetail projectDetail={projectDetail} />;
}

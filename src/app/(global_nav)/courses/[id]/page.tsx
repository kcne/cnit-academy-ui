import LecturePage from "@/app/components/lecturePage";
import { notFound } from "next/navigation";

export default async function CoursePage({ params }: { params: { name: string } }) {
  const res = await fetch(`http://localhost:8000/api/lekcije/${params.name}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const data = await res.json();

  return <LecturePage title={data.title} content={data.content} />;
}

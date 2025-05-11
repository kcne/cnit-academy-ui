import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lecture } from "@/api/types/course";

interface LectureCardProps {
  lecture: Lecture;
  isFinished: boolean;
  onClick: () => void;
}

export default function LectureCard({ lecture, isFinished, onClick }: LectureCardProps) {
  return (
    <Card
      className={`cursor-pointer hover:shadow-md transition-shadow ${
        isFinished ? "bg-green-100 border-green-400" : "bg-white"
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className="text-lg font-medium">{lecture.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          {isFinished ? "Finished" : "Not Started"}
        </p>
      </CardContent>
    </Card>
  );
}
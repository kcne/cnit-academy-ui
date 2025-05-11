import LectureCard from "./lectureCard";
import { Lecture } from "@/api/types/course";

interface LectureBarProps {
  allLectures: Lecture[];
  onLectureClick: (lectureId: number) => void;
}

export default function LectureBar({ allLectures, onLectureClick }: LectureBarProps) {
  return (
    <div className="w-80 bg-gray-100 border-l border-gray-300 p-4 overflow-y-auto hidden lg:block">
      <h2 className="text-xl font-semibold mb-4">All Lectures</h2>
      <div className="space-y-4">
        {allLectures.map((lecture) => (
          <LectureCard
            key={lecture.id}
            lecture={lecture}
            isFinished={true} 
            onClick={() => onLectureClick(lecture.id)}
          />
        ))}
      </div>
    </div>
  );
}
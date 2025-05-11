"use client";
import { useLectures, useMyLectures } from "@/api/hooks/useLectures";
import LectureBox from "./components/lectureBox";
import LectureBar from "./components/lectureBar";

export default function LectureView() {
    const id = 1 // placeholder
    const { data: lecture } = useLectures(id);
    const { data: allLectures } = useMyLectures();

    const handleLectureClick = (lectureId: number) => {
    console.log(`Navigate to lecture with ID: ${lectureId}`);
  };

    return (
        <div className="flex flex-row w-full h-screen overflow-hidden">
            <div className="flex-grow flex flex-col gap-4 p-0 lg:p-0 overflow-y-auto">
                {lecture ? (
                    <LectureBox 
                    key={lecture.id}
                    lecture={lecture}
                    />
                ) : (
                    <p>No lecture available</p>
                )}
            </div>
            <LectureBar allLectures={allLectures || []} onLectureClick={handleLectureClick} />
      </div>
    );
}
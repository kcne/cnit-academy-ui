"use client";
import { useLectures } from "@/api/hooks/useLectures";
import LectureBox from "./components/lectureBox";

export default function LectureView() {
    const { data: lecture } = useLectures();
    return (
        <div className="flex flex-row w-full h-screen overflow-hidden">
            <div className="flex-grow flex flex-col gap-4 p-0 lg:p-0 overflow-y-auto">
                {lecture && (
                    <LectureBox 
                    key={lecture.id}
                    lecture={lecture}
                    />
                )}
            </div>
      </div>
    );
}
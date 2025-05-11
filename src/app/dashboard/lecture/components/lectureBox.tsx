import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import  VideoPlayer  from  "./videoPlayer"
import { Lecture } from "@/api/types/course";

interface LectureBoxProps {
  lecture: Lecture;
}

export default function LectureBox({ lecture }: LectureBoxProps) {
    const [isFinished, setIsFinished] = useState(false);

    const handleFinish = () => {
        setIsFinished(!isFinished);
        // unfinished PUT call to the backend
    }

    return (
        <div  className="space-y-6">
            <Card>
                <CardHeader>
                    <CardContent>
                        <VideoPlayer vioUrl={lecture.vioUrl ?? ''} />
                    </CardContent>
                    <CardTitle className="text-2xl font-bold">
                        {lecture.title}
                    </CardTitle>
                    <CardContent>
                    <p className="text-gray-700">{lecture.content}</p>
                    </CardContent>
                </CardHeader>
                <div className="flex justify-end mb-6 mr-6">
                <Button onClick={handleFinish} variant={isFinished ? 'secondary' : 'default'}>
                    {isFinished ? 'Finished' : 'Mark as Finished'}
                </Button>
            </div>  
            </Card>
        </div>
    )
}
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Clock, Circle } from "lucide-react";

const courses = [
  {
    title: "Başlangıç Seviye Java ile Backend Web Development Patikası",
    rating: 4.9,
    users: 128631,
    points: 479,
    hours: 84,
  },
  {
    title: "Başlangıç Seviye PHP ile Backend Web Development Patikası",
    rating: 4.86,
    users: 131799,
    points: 517,
    hours: 80,
  },
  {
    title: "Başlangıç Seviye Frontend Web Development Patikası",
    rating: 4.86,
    users: 130287,
    points: 359,
    hours: 77,
  },
  {
    title: "Başlangıç Seviyesi .Net Core Patikası",
    rating: 4.87,
    users: 128879,
    points: 473,
    hours: 60,
  },
];

interface CourseCardProps{
  title:string,
  rating: number,
  users: number,
  points:number,
  hours:number
}

export default function CourseCard(course:CourseCardProps) {
  console.log(course.title)
  return (
    <div className="flex gap-4 p-8 overflow-auto">
        <Card className="w-72 p-4 shadow-lg rounded-2xl">
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            Kariyer Patikası
          </span>
          <h3 className="mt-3 text-lg font-semibold">{course.title}</h3>
          <div className="flex items-center gap-1 text-gray-600 mt-2">
            <span className="text-lg font-bold">{course.rating}</span>
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="mt-4 space-y-1 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" /> {course.users} Kullanıcı
            </div>
            <div className="flex items-center gap-2">
              <Circle className="w-4 h-4" /> {course.points} Puan
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {course.hours} Saat Ders İçeriği
            </div>
          </div>
        </Card>
    </div>
  );
}

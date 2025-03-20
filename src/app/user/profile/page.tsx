import Image from "next/image";
import { Heart } from "lucide-react";
export default function ProfilePage() {
  const card_box = "bg-white p-4 rounded-lg shadow-lg";
  const card_title = "text-lg font-semibold";
  return (
    <>
      <div className="flex space-x-4 bg-white p-6 rounded-lg shadow-lg">
        <Image
          src="/img1.png"
          width={100}
          height={100}
          alt="Profile"
          className="rounded-full"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Enes Korac</h2>
          <p className="text-gray-600">33 - Serbia</p>
          <span className="text-purple-600">0 profile visits</span>
        </div>
        <i className="fa fa-pencil text-lg"></i>
      </div>

      {/* Bottom Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Coin Card */}
        <div
          className={`${card_box} flex flex-row justify-between items-center`}
        >
          <div className="w-36 border-2 border-solid">
            <Image src={"/img2.jpg"} width={150} height={150} alt="img2" />
          </div>
          <div className="flex flex-col justify-evenly text-center w-full h-24 border-2 border-solid ">
            <p className="text-red-500">❤ 0000</p>

            <p className="text-yellow-500">🟡 0000</p>
          </div>
        </div>
        {/* Skills Card */}
        <div className={card_box}>
          <h3 className={card_title}>Skills</h3>
          <p className="text-gray-500">I have not added a skill yet</p>
        </div>

        {/* Projects Card */}
        <div className={card_box}>
          <h3 className={card_title}>Projects</h3>
          <p className="text-gray-500">I have not shared a project yet</p>
        </div>

        {/* Blog Posts Card */}
        <div className={card_box}>
          <h3 className={card_title}>Blog Posts</h3>
          <p className="text-gray-500">I have not shared a blog post yet</p>
        </div>

        {/* Education Card */}
        <div className={card_box}>
          <h3 className={card_title}>Education</h3>
        </div>
        {/* Job Card */}
        <div className={card_box}>
          <h3 className={card_title}>Job Experience</h3>
        </div>
      </div>
    </>
  );
}

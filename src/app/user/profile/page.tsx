import Image from "next/image";
import { Heart } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  const card_box = "bg-white p-4 rounded-lg shadow-lg";
  const card_title = "text-lg font-semibold";
  const check_box = "flex items-center space-x-2 space-y-2";
  const label_checkbox =
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
  return (
    <>
      <div className="flex space-x-4 bg-white p-6 rounded-lg shadow-lg">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
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
          <div className="w-36 ">
            <Image src={"/img2.jpg"} width={150} height={150} alt="img2" />
          </div>
          <div className="flex flex-col justify-evenly text-center w-full h-24  ">
            <p className="text-yellow-500">🟡 0000</p>
            <p className="text-red-500">❤ 0000</p>
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
        {/* Points Card */}
        <Collapsible className={card_box}>
          <CollapsibleTrigger>
            <h3 className={card_title}>Fill up your profile and earn points</h3>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-2/5">
                {" "}
                40%
              </div>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className={check_box}>
              <Checkbox id="item1" />
              <label htmlFor="item1" className={label_checkbox}>
                Add GitHub(+2 points)
              </label>
            </div>

            <div className={check_box}>
              <Checkbox id="item2" />
              <label htmlFor="item2" className={label_checkbox}>
                Add LinkedIn (+2 points)
              </label>
            </div>
            <div className={check_box}>
              <Checkbox id="item3" />
              <label htmlFor="item3" className={label_checkbox}>
                Add Project (+5 points)
              </label>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  );
}

'use client';

const fetchCourse = async () => {
    const response = await fetch('/api/course');
    return response.json();
}

export function coursePage() {
    const { data, error, isloading} = useQuery;
}

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useQuery } from "react-query";


export default function Courses(){
    return(
        <div>
            <div className="flex items-center">
                <div className="bg-sky-100 rounded-2xl w-4/5 h-96 my-16 mx-40 p-2 shadow-2xl flex justify-items-start" >
                    <div className="w-3/4">
                        <div className="pt-4 ">
                            <h1 className="text-4xl font-bold">Header Text</h1>
                            <h2 className="text-lg w-full relative h-max font-semibold">
                                Dugi non Header text Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ut quaerat optio, omnis mollitia hic ex dolore, ullam non vero velit officiis nam magnam facere aliquid
                                maxime minus quisquam libero dolor!Dugi non Header text Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ut quaerat optio, omnis mollitia hic ex dolore, ullam non vero velit officiis nam magnam facere aliquid
                                maxime minus quisquam libero dolor!Dugi non Header text Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ut quaerat optio, omnis mollitia hic ex dolore, ullam non vero velit officiis nam magnam facere aliquid
                                maxime minus quisquam libero dolor!Dugi non Header text Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ut quaerat optio, omnis mollitia hic ex dolore, ullam non vero velit officiis nam magnam facere aliquid
                                maxime minus quisquam libero dolor!
                            </h2>
                        </div>
                        <div className="py-4 flex items-center">
                            <Button variant="outline" className="border-blue-600 border-2 rounded-lg text-blue-600" >Button</Button>
                            <h1 className="px-4">Date: 3/18/2025</h1>
                        </div>
                    </div>
                    <div className="shadow-2xl h-max w-1/4 rounded-2xl mr-5 mt-40 px-10 bg-white opacity-70">
                        <h1 className="p-5 text-blue-600 font-bold text-xl">Novi div</h1>
                        <h1 className="p-5 "> Dugi non Header text Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ut quaerat optio, omnis mollitia hic ex dolore, ullam non vero velit officiis nam magnam facere aliquid
                                maxime minus quisquam libero dolor!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque dolore, praesentium maxime architecto eos provident enim vitae qui quisquam unde ad, culpa, natus atque quia necessitatibus vel? Optio, obcaecati. Iure!</h1>
                    </div>
                </div>
            </div>

            <div className="flex mx-40 my-16 font-semibold ">
                <div className=" rounded-2xl h-80 w-2/3 p-2 shadow-2xl flex flex-wrap relative">
                <h1 className="p-1 w-1/2">text</h1>
                <h1 className="p-1 w-1/2">text</h1>
                <h1 className="p-1 w-1/2">text</h1>
                <h1 className="p-1 w-1/2">text</h1>
                <h1 className="p-1 w-1/2">text</h1>
                <h1 className="p-1 w-1/2">text</h1>
                <h1 className="p-1 w-1/2">text</h1>
                </div>

            </div>
            <div className="font-semibold flex justify-items-center mx-40 ">
                    <div className=" w-2/3 h-full p-2 shadow-xl rounded-2xl">
                        <h1 className="text-2xl font-bold">lesson</h1>
                        <div className=" border-l-2 border-black">
                            <div className="">
                                <div className="flex justify-between">
                                    <div className="">
                                        <h1 className="">lesson name</h1>
                                    </div>
                                    <Button variant="outline" className="border-blue-600 border-2 rounded-lg text-blue-600" >Button</Button>
                                </div>
                                <Progress value={23} className="bg-orange-400 opacity-75 h-5 mt-2 "></Progress>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 w-1/5 ml-20 h-96 shadow-2xl">
                        <h1 className="">sample text</h1>
                        <ul className="text-gray-800 font-semibold list-disc p-5">
                            <li>s1</li>
                            <li>s2</li>
                            <li>s3</li>
                            <li>s4</li>
                        </ul>
                        <Button variant="default" className="bg-blue-600 border-blue-600 border-2 rounded-lg w-full">Button</Button>
                    </div>
                </div>
        </div>

    )
}
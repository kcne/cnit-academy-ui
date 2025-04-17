'use client';

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react";
import axios from "axios"
import { Clock, Coins, UsersRound } from "lucide-react";
import { BASE_URL } from "../context/userContext";


export default function Courses(){

    const fetchCourse = async () => {
        const response = await fetch('/api/course');
        return response.json();
    }
    
    const [data, setData] = useState<any>(null);
    
    useEffect(()=>{
        const token = localStorage.getItem("authToken");
        axios.get(BASE_URL+"/api/course/1", {headers: {Authorization: `Bearer ${token}`}}).then((podaci:any)=>setData(podaci.data));
        }, []   );
    
    console.log(data)
    const date = new Date(data?.createdAt);


    return(
        <div>
            <div className="flex flex-wrap m-16 justify-center gap-x-20 justify-items-center ">
                <div className="bg-sky-100 mb-16 h-max rounded-2xl min-w-80 w-3/5 p-5 shadow-2xl flex justify-items-start" >
                    <div className="">
                        <div className="pt-4 ">
                            <h1 className="text-4xl font-bold">{data?.title}</h1>
                            <h2 className="text-lg w-full relative h-max font-semibold">{data?.description}</h2>
                        </div>
                        <div className="py-4 flex items-center">
                            <Button variant="outline" className="border-blue-600 border-2 rounded-lg text-blue-600 bg-sky-100" >Enroll</Button>
                            <h1 className="px-4">Course created: {date.getFullYear()}/{date.getMonth()}/{date.getDate()}</h1>
                        </div>
                    </div>
                </div>
                {/* <div className="shadow-2xl h-max w-1/3 rounded-2xl p-5 bg-white">
                        <h1 className="p-5 text-blue-600 font-bold text-xl">Novi div</h1>
                        <h1 className="p-5 "> Dugi non Header text Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ut quaerat optio, omnis mollitia hic ex dolore, ullam non vero velit officiis nam magnam facere aliquid
                                maxime minus quisquam libero dolor!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque dolore, praesentium maxime architecto eos provident enim vitae qui quisquam unde ad, culpa, natus atque quia necessitatibus vel? Optio, obcaecati. Iure!</h1>
                    </div> */}
                <div className="flex h-full w-max font-semibold ">
                    <div className=" rounded-2xl shadow-2xl flex flex-wrap relative">
                    <h1 className="py-10 px-5 w-1/2 flex"><Clock color="#000000" />{Math.round(data?.durationInHours * 10)/10} Hours</h1>
                    <h1 className="py-10 px-5 w-1/2 flex"><Coins color="#000000" />{data?.coins} Coins</h1>
                    <h1 className="py-10 px-5 w-1/2 flex"><UsersRound color="#000000" />{data?.studentCount} Students</h1>
                    </div>
                </div>
            </div>
            
            <div className="font-semibold min-w-80 flex justify-self-center w-3/4 ">
                    <div className=" w-full h-full p-2 shadow-xl rounded-2xl">
                        <h1 className="text-2xl font-bold">Lectures</h1>
                        <div className="">
                        {data?.lectures.map((lecture:any) => (
                            <div className="pt-5">
                                <div className="flex justify-between">
                                    <div>
                                        {lecture.title}
                                    </div>
                                    <Button variant="outline" className="border-blue-600 border-2 rounded-lg text-blue-600" >Go to lecture</Button>
                                </div>
                                <div className="w-full my-5"> 
                                    <h1 className={data?.started ? data?.finished ? 
                                        "bg-yellow-500 rounded-lg text-center" : 
                                        "bg-orange-300 rounded-lg text-center" : 
                                        "bg-orange-200 rounded-lg text-center"}>
                                        
                                        {data?.started ? data?.finished ? "Finished!" : "Unfinished" : "Haven't started" }
                                    </h1>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
        </div>

    )
}
'use client';

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";
import axios from "axios"
import { CheckCheck, ChevronDown, Clock, Coins, Timer, UsersRound } from "lucide-react";
import Link from "next/link";
import { BASE_URL } from "@/app/providers/userContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Courses({ params: { id } }: any){
    const token = localStorage.getItem("authToken");
    const [data, setData] = useState<any>(null);
    
    useEffect(()=>{
        axios.get(BASE_URL+"/api/course/" + id, {headers: {Authorization: `Bearer ${token}`}}).then((podaci:any)=>setData(podaci.data));
        }, []   );
    
    console.log(data)
    const date = new Date(data?.createdAt);

    return(
        <div>
            <div className="flex flex-wrap p-16 justify-center justify-items-center ">

    {/*Course description div*/}

                <div className="h-max rounded-xl border-2 border-gray-200 min-w-80 w-full p-5 flex justify-items-start pb-40" >
                    <div className="w-full">
                        <div className="pt-4 ">
                            <h1 className="text-4xl font-bold">{data?.title}</h1>
                            <h1 className="py-2">Course created: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h1>
                            {/* Information div*/}
                            <div className="flex h-full w-full font-semibold justify-center md:justify-start">
                                <div className="flex flex-wrap relative w-3/4 md:w-1/4 justify-between py-5">
                                <h1 className="px-5 py-2 md:px-0 flex"><Clock color="#000000" />{Math.round(data?.durationInHours * 10)/10} Hours</h1>
                                <h1 className="px-5 py-2 flex"><Coins color="#000000" />{data?.coins} Coins</h1>
                                <h1 className="px-5 py-2 flex"><UsersRound color="#000000" />{data?.studentCount} Students</h1>
                                </div>
                            </div>
                            <h2 className="text-lg w-full relative h-max font-semibold">{data?.description}</h2>

                        
                        </div>
                        <div className="py-4 flex justify-center md:justify-start">
                            <Button variant="outline" className="border-black border-2 rounded-lg text-white bg-black hover:" onClick={()=>{
                                axios.put(BASE_URL + "/api/course/" + id + "/start",{}, {headers: {Authorization: `Bearer ${token}`}});
                            }}>Start</Button>
                        </div>
                        
                            {/* lectures div */}
                            <div className="flex">
                                <h1 className="font-medium text-black text-3xl flex">Lectures</h1>
                            </div>
                                    {data?.lectures.map((lecture:any) => (
                                        <Accordion type="single" collapsible key={lecture.id}>
                                            <AccordionItem value="1">
                                                <div className="pt-3 flex flex-col">
                                                        <AccordionTrigger className="flex justify-start">
                                                            <div className="font-bold text-xl">
                                                                    {lecture.title}
                                                            </div>
                                                            <ChevronDown></ChevronDown>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                        <div className="flex flex-col md:flex-row justify-between items-center">
                                                                <div className="p-5">
                                                                    {lecture.content}
                                                                </div>

                                                                <div className="flex items-center ">
                                                                {lecture?.started ? lecture?.finished ?  <CheckCheck /> :  <Timer /> : "" }
                                                                    <Button variant="outline" className="border-black border-2 rounded-lg text-black m-2"><Link href={"/lecture/"+ lecture.id}>Go to lecture</Link></Button>
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                </div>
                                            </AccordionItem>
                                        </Accordion>
                                    ))}

                    </div>
                </div>

    
            </div>

    {/* Lectures div
            
           */}
        </div>

    )
}
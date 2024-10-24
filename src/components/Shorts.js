import { useEffect, useState } from "react";
import { url1,options1 } from "../utils/constant"
import ShortsVideo from "./ShortsVideo";
import { Suspense } from "react";

const Shorts = () => {
    const [shorts,setshorts]=useState([]);

 const ShortsDetail = async () => {
    try {
        const response = await fetch(url1, options1);
        
        const json = await response.json();
        
        setshorts(json.data);
    } catch (error) {
        console.error(error);
    }

    };

    useEffect(()=>{
        ShortsDetail();
    },[])

  return (
    
    <div className="flex flex-col items-center h-screen overflow-y-auto">
       {shorts.map((shorts)=>(
        <div   className="">
          <Suspense fallback={<div>Loading...</div>}>
        <ShortsVideo key={shorts.id} info={shorts} className="w-full h-full"/>
        </Suspense>
        </div>
        ))}
       
    </div>
  )
}

export default Shorts
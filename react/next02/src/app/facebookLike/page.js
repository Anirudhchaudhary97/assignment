"use client";
import React, { useState } from "react";
import { AiOutlineLike, AiTwotoneDislike } from "react-icons/ai";

const page = () => {
  const [color, setColor] = useState("blue");
  const [likeCount,setLikeCount]=useState(0)



// function to handle color
const handelLikeBtn=()=>{
    setColor(color==="blue"?"red":"blue")
    setLikeCount(likeCount+1)
}




  return (
    <div className="flex justify-center items-center flex-col">
      <h1>facebook like btn</h1>
      <h1>Likes Count:{likeCount}</h1>
      <h1>Dislike Count:00</h1>
       
      <div className="flex gap-7">
        <div onClick={handelLikeBtn} className="mt-5 bg-gray-500 w-16 h-16 cursor-pointer">
          <AiOutlineLike color={color} size={50} />
        </div>
        <div className="mt-5 bg-gray-500 w-16 h-16 cursor-pointer">
          <AiTwotoneDislike size={50} color="red" />
        </div>
      </div>
      <button onClick={()=>setLikeCount(0)} className="w-20 h-16 mt-4 rounded bg-orange-700 text-black">Reset</button>
    </div>
  );
};

export default page;




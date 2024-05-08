// "use client";
// import React, { useState } from "react";
// import { AiOutlineLike, AiTwotoneDislike } from "react-icons/ai";

// const page = () => {
//   const [color, setColor] = useState("blue");
//   const [likeCount,setLikeCount]=useState(0)



// // function to handle color
// const handelLikeBtn=()=>{
//     setColor(color==="blue"?"red":"blue")
//     setLikeCount(likeCount+1)
// }




//   return (
//     <div className="flex justify-center items-center flex-col">
//       <h1>facebook like btn</h1>
//       <h1>Likes Count:{likeCount}</h1>
//       <h1>Dislike Count:00</h1>
       
//       <div className="flex gap-7">
//         <div onClick={handelLikeBtn} className="mt-5 bg-gray-500 w-16 h-16 cursor-pointer">
//           <AiOutlineLike color={color} size={50} />
//         </div>
//         <div className="mt-5 bg-gray-500 w-16 h-16 cursor-pointer">
//           <AiTwotoneDislike size={50} color="red" />
//         </div>
//       </div>
//       <button onClick={()=>setLikeCount(0)} className="w-20 h-16 mt-4 rounded bg-orange-700 text-black">Reset</button>
//     </div>
//   );
// };

// export default page;





'use client'
import React,{useState} from 'react'
import { GrLike } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { FaRegFaceLaughSquint } from "react-icons/fa6";

const page = () => {
    const [color, setColor]= useState('grey')
    const [reaction, setReaction]= useState('like')
    const [reactionDivOpen, setReactionDivOpen]= useState(false)


    const changeReaction =(newReaction)=>{
      setReaction(newReaction)
      setColor(reaction==="like"? "blue":"grey")
    }

  const ReactionDiv= ()=>{
    return (
      <div className='border border-gray-200 shadow-lg w-32'>
        <button  className=' p-2 '>
            <GrLike onClick={()=> changeReaction('like')} color="skyblue"/>
        </button>
        <button  className=' p-2 '>
            <FaHeart  onClick={()=> changeReaction('love')} color="crimson"/>
        </button>
        <button  className=' p-2 '>
            <FaRegFaceLaughSquint onClick={()=> changeReaction('haha')} color="orange"/>
        </button>
      </div>
    )
  }

  const generateReactionButton = ()=>{
    //we will have if else later, if reaction is like, show like button,,..... similar
    if(reaction === 'love'){
      return (
            <button onMouseEnter={()=>setReactionDivOpen(true)} className=' p-2 '>
            <FaHeart color="crimson"/>
        </button>
      )
    }else  if(reaction === 'haha'){
      return (
            <button onMouseEnter={()=>setReactionDivOpen(true)} className=' p-2 '>
            <FaRegFaceLaughSquint color="orange"/>
        </button>
      )
    }
    else{
        return ( 
          <button onMouseEnter={()=>setReactionDivOpen(true)} className='bg-gray-200 p-2 border border-black'>
            <GrLike color={color}/>
        </button>)
 
    }
 
  }

//ternary operator ? : is alternative for if else
//Do not use ternary operator for multiple else if
  return (
    <div>
        {reactionDivOpen ? <ReactionDiv/>: null }
        {generateReactionButton()}
    </div>
  )
}

export default page


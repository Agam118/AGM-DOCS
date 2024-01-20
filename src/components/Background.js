import React from 'react'

const Background = () => {
  return (
    <div className="fixed h-screen w-full z-[2]">
       <div className=" absolute text-[20px] font-bold text-zinc-900 flex justify-center top-[5%] w-full  py-8" >documents</div>
       <div className=" absolute top-[50%]  left-[50%] -translate-x-[50%] -translate-y-[50%] text-[120px] font-bold tracking-tighter leading-none text-zinc-900">
          Docs.
       </div>
   </div>
  )
}

export default Background
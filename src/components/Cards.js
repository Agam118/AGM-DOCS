import React from 'react'
import { MdUploadFile } from "react-icons/md";
import { RiDownload2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion" ; 



const Cards = ({items , reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className="w-60 bg-zinc-900/90 h-72 rounded-[20px] relative overflow-hidden flex-shrink-0" >
      <div className="p-2 pt-3 text-white">
        <MdUploadFile size='30px'/>
      </div>
      <div className="text-white font-semibold leading-tight mt-5 text-sm p-3">
       {items.desc}
      </div>
      <div className="w-full absolute bottom-0 left-0"> 
        <div className="flex justify-between items-center text-white mb-3 px-3">
          <div className="text-sm">{items.fsize}</div>
          <div className="w-8 h-8 rounded-full bg-zinc-400 items-center justify-center flex">
           { items.close ? <RiDownload2Line/> : <IoClose /> } 
          </div>
        </div> 
       {
         items.tag.isOpen &&
           <div className={`${items.tag.Tcolor === "blue" ? "bg-blue-500" : "bg-green-500" } w-full py-4 flex justify-center align-center`}>
              <h2 className="text-sm font-semibold text-white">{items.tag.Ttitle}</h2>
           </div>
       }
      </div>
    </motion.div>
  )
}

export default Cards
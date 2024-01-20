import React from 'react'
import Cards from './Cards'
import { useRef } from 'react';

const data = [
   
  {
     desc : " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece making it over 2000 years old. Richard McClintock," , 
     fsize : "2.1mb",
     close : false , 
     tag : {
             isOpen : true ,
             Tcolor : "green",
             Ttitle : "Download Now" 
          }
    },
    {
        desc : " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece making it over 2000 years old. Richard McClintock," , 
        fsize : "0.1mb",
        close : true , 
        tag : {
                isOpen : false ,
                Tcolor : "green",
                Ttitle : "Download Now" 
             }
     },
     {
        desc : " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece making it over 2000 years old. Richard McClintock," , 
        fsize : "0.3mb",
        close : true , 
        tag : {
                isOpen : false ,
                Tcolor : "green",
                Ttitle : "Download Now" 
             }
     },
     {
        desc : " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece making it over 2000 years old. Richard McClintock," , 
        fsize : "1.1mb",
        close : false , 
        tag : {
                isOpen : true ,
                Tcolor : "blue",
                Ttitle : "Upload" 
             }
     },

] ; 



const Ground = () => {

  
  const ref = useRef(null) ; 

  return (
    <div ref = {ref} className="h-full w-full z-[3] fixed top-0 left-0 gap-10 flex flex-wrap  ">
      {
         data.map( (items,index) => (
            <Cards items={items} reference={ref} key={index}/>
         ))
      }
     </div>
  )
}

export default Ground
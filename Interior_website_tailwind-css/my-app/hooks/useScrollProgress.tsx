import React, { useEffect, useState } from 'react'

const useScrollProgress = () => {
    const [completion , setCompletion] = useState(0);

    useEffect (() =>{
        const updateScrollProgress = () =>{
        const currentProgress = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (scrollHeight > 0) {
            const progress = (currentProgress / scrollHeight) * 100;
            setCompletion(progress);
          }
    }
    window.addEventListener("scroll",updateScrollProgress);
    return ()=> window.removeEventListener("scroll",updateScrollProgress)
},[])
  return completion;
}

export default useScrollProgress
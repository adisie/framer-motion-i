import { useState } from "react";
// pages
import SinglePost from "./SinglePost"
// main
const Home = () => {

    // states 
    const [lastScrollTop,setLastScrollTop] = useState(0)

    // scroll handler
    const scrollHadler = e => {
        let header = document.getElementById('my-header') 
        
        const currentScrollTop = e.target.scrollTop;
        if(currentScrollTop > lastScrollTop ){
            header.classList.add('top-[-50px]')
        }else{
            header.classList.remove('top-[-50px]')
        }
        setLastScrollTop(currentScrollTop)

    }

  return (
    <div className="flex-grow flex">
        <div className="max-w-[720px] h-[100vh] mx-auto px-3 text-xs text-emerald-900 font-serif overflow-y-auto pt-[54px]" id="post-list" onScroll={(e) => scrollHadler(e)}>
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
        </div>
    </div>
  )
}

export default Home
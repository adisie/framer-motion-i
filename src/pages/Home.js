import {useState} from 'react'
// pages
import SinglePost from "./SinglePost"
// main
const Home = () => {

    // states
    const [lastScrollTop,setLastScrollTop] = useState(0)

    // scroll handler
    const scrollHandler = e => {
        let userInfo = document.getElementById('user-info-con')
        let navCon = document.getElementById('nav-con')
        if(e.target.scrollTop > lastScrollTop){
            console.log('hide')
            userInfo.classList.add('top-[-100vh]')
            navCon.classList.remove('pt-[195px]')
        }else if(e.target.scrollTop === 0){
            navCon.classList.add('pt-[195px]')
            userInfo.classList.remove('top-[-100vh]')
            console.log('show')
        }
        setLastScrollTop(e.target.scrollTop)
    }
  return (
    <div className="flex-grow">
        <div className="max-w-[720px] mx-auto px-3 h-[100vh] overflow-y-auto" onScroll={scrollHandler}>
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

import {motion} from 'framer-motion'

// main
const Home = () => {
  return (
    <div className="flex-grow flex items-center justify-center">
        <motion.div className="w-[100px] h-[100px] bg-emerald-500"
            drag
            dragSnapToOrigin
        ></motion.div>
    </div>
  )
}

export default Home
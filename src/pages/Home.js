import {motion} from 'framer-motion'

// variants
// container variant
const conVar = {
    tap: {
        opacity: .5,
        scale: 2,
    }
}
// main
const Home = () => {
  return (
    <div className="flex-grow bg-gray-100 flex items-center justify-center">
        <motion.div 
            variants={conVar} 
            whileTap="tap"
            className="w-[100px] h-[100px] bg-emerald-500 flex items-center justify-center">Hello</motion.div>
    </div>
  )
}

export default Home
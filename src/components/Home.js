import {motion} from 'framer-motion'

// main
const Home = () => {
  return (
    <div className="flex-grow flex items-center justify-center">
        <div>
            <motion.h1 
                className="text-3xl text-emerald-800 font-serif font-bold" 
                animate={{
                    fontSize: '64px',
                    color: '#000066'
                }}
            >Ethiopia The Land Of Wisdom</motion.h1> 

            <motion.button 
                className="border-2 px-5 py-1 rounded-sm border-emerald-700 mt-5" 
                animate={{
                    scale: 1.75,
                    backgroundColor: '#006600'
                }}
            >click me</motion.button>
        </div>
    </div>
  )
}

export default Home

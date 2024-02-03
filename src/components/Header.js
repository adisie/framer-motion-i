import {motion} from 'framer-motion'

// icons
// share
import { FaShareSquare } from "react-icons/fa"

// main
const Header = () => {
  return (
    <header className="py-2">
        <div className="max-w-[820px] mx-auto flex items-center justify-between text-emerald-700 font-serif overflow-hidden">
            {/* site logo */}
            <div className="flex items-center mr-3">
                <motion.button 
                    className="text-xl" 
                    initial={{y:-300}}
                    animate={{y: 0}}
                    >
                    <FaShareSquare />
                </motion.button>
            </div>
            {/* nav - links */}
            <motion.div 
                className="flex-grow flex items-center justify-end border-b border-emerald-700 border-opacity-[.13] py-1" 
                initial={{x: '100vw'}} 
                animate={{x: 0}}
                >
                nav-link
            </motion.div>
        </div>
    </header>
  )
}

export default Header
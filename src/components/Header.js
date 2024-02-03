import {NavLink} from 'react-router-dom'

// icons
import { FaShareSquare } from "react-icons/fa"
import {motion} from 'framer-motion'

// main
const Header = () => {

    // active link style
    const activeLinke = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none'
        }
    }
  return (
    <header 
        className="py-3"
    >
        <div 
            className="max-w-[820px] mx-auto flex items-center justify-between px-1 text-xs text-emerald-700 font-serif overflow-hidden"
        >
            {/* site logo */}
            <motion.div 
                className="text-xl mr-3" 
                initial = {{y: -300}} 
                animate = {{y: 0}} 
                transition = {{type: 'spring',stiffness: 30, duration: 1.5}}
            >
                <NavLink to={'/'}>
                    <FaShareSquare />
                </NavLink>
            </motion.div>
            {/* nav-links */}
            <motion.div   
                className="flex-grow border-b border-emerald-700 border-opacity-[.13] flex items-center justify-end" 
                initial = {{x: '100vw'}} 
                animate = {{x: 0}} 
                transition = {{delay: .5, type: 'spring', stiffness: 30}}
            >
                <ul 
                    className="flex items-center py-1"
                >
                    <li 
                        className="ml-2"
                    >
                        <NavLink to={'/'} style={activeLinke}>Home</NavLink>
                    </li>
                    <li
                        className="ml-2" 
                    >
                        <NavLink to={'/projects'} style={activeLinke}>Projects</NavLink>
                    </li>
                    <li
                        className="ml-2" 
                    >
                        <NavLink to={'/contacts'} style={activeLinke}>Contacts</NavLink>
                    </li>
                </ul>
            </motion.div>
        </div>
    </header>
  )
}

export default Header
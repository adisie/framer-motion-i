import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'

// main
const Home = () => {
  return (
    <div 
        className="flex-grow flex"
    >
        <div 
            className="max-w-[820px] mx-auto px-1 flex-grow flex items-start justify-center"
        >
            <motion.div className="flex flex-col items-center justify-center text-xs text-emerald-900 font-serif" 
                initial = {{opacity: 0,scale: 0}} 
                animate = {{opacity: 1, scale: 1}} 
                transition={{delay: .5,duration: 1.5}}
            >
                <p className="max-w-[650px] text-justify my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident eaque autem eius nostrum, rerum a nisi ipsam enim natus, temporibus error qui, reiciendis eum maxime sunt rem in illo repellat reprehenderit molestias. Voluptatum dignissimos sunt, quae numquam magni perspiciatis facere rem optio qui aperiam corporis quam similique, dolore esse!
                </p>
                <div 
                    className="flex items-center justify-center border border-emerald-700 rounded-sm px-5 py-1"
                >
                    <NavLink to={'/contacts'}>Talk me</NavLink>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Home
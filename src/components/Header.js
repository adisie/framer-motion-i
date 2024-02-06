// icons
// share
import { FaShareSquare } from "react-icons/fa"
// home
import { IoMdHome } from "react-icons/io"
// project
import { FaRProject } from "react-icons/fa"
// contact
import { FaPhone } from "react-icons/fa6"

// main
const Header = () => {
  return (
    <header className="w-screen h-[50px] bg-emerald-700 text-xs text-gray-300 font-serif fixed left-0 top-0 transition-all ease-in-out duration-500" id="my-header">
        <div className="max-w-[720px] mx-auto px-3 flex items-center justify-between h-full">
            {/* site logo */}
            <div className="flex items-center text-xl">
                <button>
                    <FaShareSquare />
                </button>
            </div>
            {/* nav */}
            <nav>
                <ul className="flex items-center">
                    <li className="flex items-center cursor-pointer">
                        <IoMdHome className="text-lg mr-[.13rem]"/>
                        <span className="mr-1">Home</span>
                    </li>
                    <li className="flex items-center cursor-pointer">
                        <FaRProject className="text-lg mr-[.13rem]"/>
                        <span className="mr-1">Projects</span>
                    </li>
                    <li className="flex items-center cursor-pointer">
                        <FaPhone className="text-lg mr-[.13rem]"/>
                        <span className="mr-1">Contacts</span>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
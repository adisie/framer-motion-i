
// main
const Header = () => {
  return (
    <header className="bg-emerald-700 text-xs text-gray-300 font-serif">
        <div className="max-w-[720px] mx-auto px-3 relative">
            {/* user-info */}
            <div className="flex items-center transition-all ease-in-out duration-500 absolute" id="user-info-con">
                <div>
                    <img src="https://th.bing.com/th/id/R.abfef2aec28fbd966a223628766e0208?rik=k4jDECEtd%2f1SFg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f3%2f31%2fBald_eagle_head_frontal.jpg&ehk=s%2bAtv5vcMVDxzp7WCHS0lEs5qWvm4ps9ahyF7nys8rs%3d&risl=&pid=ImgRaw&r=0" alt="user profile"
                        className="w-[180px] h-[180px] transition-all ease-in-out duration-1000" />
                </div>
                <div>
                    <p className="max-w-[430px] text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic necessitatibus dolorem sit dicta consectetur modi, maxime voluptatibus corporis quos tempora accusantium non mollitia quibusdam recusandae assumenda quia, velit, soluta cum accusamus? Eveniet.
                    </p>
                </div>
            </div>
            {/* sub-header */}
            <div className="pt-[195px] transition-all ease-in-out duration-500" id="nav-con">
                <ul className="flex items-center">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
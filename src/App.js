import {Routes,Route} from 'react-router-dom'

// components
import Header from "./components/Header"
// pages
import Home from "./pages/Home"
import Projects from './pages/Projects'
import Contacts from "./pages/Contacts"

// main
const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
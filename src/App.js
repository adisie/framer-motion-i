
// components
import Header from "./components/Header"
// pages
import Home from "./pages/Home"
// main
const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Home />
    </div>
  )
}

export default App
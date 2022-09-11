import './Main.css'
import Navbar from '../Navbar/Navbar'
import Centerblock from '../Centerblock/Centerblock'
import Sidebar from '../Sidebar/Sidebar'

const Main = () => {
  return (
    <main className="main">
      <nav className="main__nav">
        <Navbar />
      </nav>
      <div className="main__centerblock">
        <Centerblock name="Треки" />
      </div>
      <div className="main__sidebar">
        <Sidebar />
      </div>
    </main>
  )
}

export default Main

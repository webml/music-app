import './App.css'

import Main from './components/Main/'
import Bar from './components/Bar'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Main />
          <Bar />
          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  )
}

export default App

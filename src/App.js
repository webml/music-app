import './App.css'

import Main from './modules/Main/Main'
import Bar from './modules/Bar/Bar'

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

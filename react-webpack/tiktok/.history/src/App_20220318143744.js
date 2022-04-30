import {Routes , Route} from "react-router-dom"

import Home from "./pages/Home"
import News from "./pages/News"
import Contact from "./pages/Contact"


function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li>
          <a href = "/">Home</a>
        </li>
        <li>
        <a href = "/News">News</a>
        </li>
        <li>
        <a href = "/Contact">Contact</a>
        </li>
      </ul>
    </nav>
      <Routes>

      </Routes>
      
    </div>
  )
}

export default App;

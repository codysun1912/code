import {Routes , Route} from "react-router-dom"

import HomePage from "./pages/Home"
import NewsPage from "./pages/News"
import ContactPage from "./pages/Contact"


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
  );
}

export default App;

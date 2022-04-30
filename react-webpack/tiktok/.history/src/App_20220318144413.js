import {Routes , Route , Link} from "react-router-dom"

import Home from "./pages/Home"
import News from "./pages/News"
import Contact from "./pages/Contact"


function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li>
          <Link href = "/">Home</Link>
        </li>
        <li>
        <Link href = "/News">News</Link>
        </li>
        <li>
        <Link href = "/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
      <Routes> 
      <Route path = "/" element={<Home/>}/>
      <Route path = "/News" element={<News/>}/>
      <Route path = "/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

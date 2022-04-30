import {useState , useMemo} from "react";


function App() {
  const [name, setName] = useState("")
  const [price ,setPrice]=useState("")
  const [products,setProducts] = useState([])

  const handleClick = () =>{
    setProducts([...products , {
      name,
      price: +price
    }])
  }

  const total = useMemo(() => {
    const result = products.reduce((result, product) =>{
      return result + product.price
    },0)
    return result
  },[products])
  
  
  return (
    <div className="App">
    <input 
    value={name}
    placeholder="Enter your name"
    onChange={(e)=> setName(e.target.value)}
    />
    <br/>
    <input 
    value={price}
    placeholder="Enter your price"
    onChange={(e)=> setPrice(e.target.value)}

    />
    <br/>
    <button onClick={handleClick}>Click</button>
    <br/>
    Total:
    <ul>
      {products.map((product,index) => (
        <li key="index"> {product.name} - {product.price}</li>
      ))}
    </ul>

    
    </div>
  )
}

export default App;

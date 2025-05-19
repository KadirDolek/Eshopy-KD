import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Content from './Components/Content/Content'
import data from './data.json'
console.log(data);


function App() {


  return (
    <>
      <Navbar/>
      
      <div id='carte' style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((tableau, index) => (
          <Content 
            key={index} 
            propriete={tableau}        
            />
        ))} 
      </div>
    </>
  )
}

export default App

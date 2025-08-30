import Chai from "./Chai";
function App() {
  const username='Ruvaid';
  return (
    
    <div>  
    {/**or we can use react fragment <>  </> */}
     <h1>Hello, {username}! using React Vite</h1>
    <Chai/>
    </div>  
  )
}

export default App;

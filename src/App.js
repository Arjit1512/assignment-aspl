
import { Routes,Route } from 'react-router-dom';
import Home from './Home.js'
import Swift from './Swift.js'

function App() {
  return (
    
    
    <Routes>
     <Route path="/" element={<Home></Home>} />

     <Route path="/swift" element={<Swift></Swift>} />
     
     </Routes> 
    
    

  );
}

export default App;
{/* 
 */}
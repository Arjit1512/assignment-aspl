import firstPage from './components/firstPage.jsx';
import secondPage from './components/secondPage.jsx';
import thirdPage from './components/thirdPage.jsx'
import fourthPage from './components/fourthPage.jsx';
import fifthPage from './components/fifthPage.jsx';
import sixthpage from './components/sixthpage.jsx';
import seventhPage from './components/seventhPage.jsx';
import eighthPage from './components/eighthPage.jsx';
import ninthPage from './components/ninthPage.jsx';
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
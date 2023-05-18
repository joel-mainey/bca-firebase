import Nav from './Nav';
import About from './About';
import Nursery from './Nursery';
import Hilltop from './Hilltop';
import Valley from './Valley';
import Wetlands from './Wetlands';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Auth } from './components/auth';

function App() {  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Nursery" element={<Nursery />} />
        <Route path="/Hilltop" element={<Hilltop />} />
        <Route path="/Wetlands" element={<Wetlands />} />
        <Route path="/Valley" element={<Valley />} />
      </Routes>   
    </Router>
  );
}

function Home() {
  return(
    <div className='p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.92)'}}>
      <h1 className='Display-1 text-white'>Home</h1>
      <h2>Welcome to the BCA Species List Home Page.</h2>
      <h4>Please use the above Menu to navigate our current biomes.<br></br>Blah Blah Blah!<br></br><br></br>
      <b><i>- The People</i></b></h4>
    </div>
  );
}

export default App;


// import Nav from './Nav';
// import About from './About';
// import Nursery from './Nursery';
// import Hilltop from './Hilltop';
// import Valley from './Valley';
// import Wetlands from './Wetlands';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// //import "./App.css";
// import { Auth } from './components/auth';



// function App() {
  
//   return (
//     <Router>
//     <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Nursery" element={<Nursery />} />
//         <Route path="/Hilltop" element={<Hilltop />} />
//         <Route path="/Wetlands" element={<Wetlands />} />
//         <Route path="/Valley" element={<Valley />} />
        
//       </Routes>
      
//   </Router>
  
//   );
  
// }

// function Home()
// {
//   return(
//     <div className='row mt-3 p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.92)'}}>
//   <p><h1 className='Display-1 text-white'>Home</h1>
//   <h2>Welcome to the BCA Species List Home Page.</h2>
//   <h4>Please use the above Menu to navigate our current biomes.<br></br>Blah Blah Blah!<br></br><br></br>
//   <b><i>- The People</i></b></h4>
//   </p>
//   </div>
  
//   );
// }

// export default App;
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
    <div class="container" >
      
    <div className='p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.92)'}}>
      <h1 className='centered-text'>Welcome to the home of the Tiwaiwaka species list.</h1>
      <img src="/images/Tiwaiwaka3.jpg" alt="Tiwaiwaka" className="p-0 rounded border shadow container" style={{ maxWidth: 'auto', maxHeight: 'auto', objectFit: 'cover' }}/>
    <br></br><br></br>
      <h4 >Please use the above Menu to navigate to plants that exist within our current biomes. The biomes are split into the above four sections, although this can be broken down in to many
         smaller ones.<br></br><br></br>We bring together our gifts and abilities, mātauranga, skills and experience, and networks throughout Aotearoa, many groups and individuals, all committed to realising this vision, each in our own way, regardless of culture, religion, beliefs, history, etc. It works by sharing this vision and empowering more and more people to give it effect.
         <br></br> <br></br>

We share a common voice that in time will embrace the whole of Aotearoa. By following the Principles of Tīwaiwaka set out (in the book) we have a way forward that gives us hope for the future. Keeping the whenua well is always the first priority. That is what will ensure our long-term future, especially for the generations that follow us. <br></br><br></br>
      </h4>
    </div>
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
import React,{useState} from 'react';
import './App.css';
import Home from './Components/Home';
import Title from './Components/Title';
import About from './Components/About';
import List from './Components/List';

// function App() {
//   const [page, setPage] = useState('home');

//   const handleHomeClick = () => {
//     setPage('home');
//   };

//   const handleAboutClick = () => {
//     setPage('about');
//   };
  
//   return (
//     <div>
//       <nav>
//         <button onClick={handleHomeClick}>Home</button>
//         <button onClick={handleAboutClick}>About</button>
//       </nav>


//       {page === 'home' && <Home />}
//       {page === 'about' && <About />}
//     </div>
//   );
// }
function App() {

  
  

  return (
    <div>
      
      {/* <button onClick={() => handleButtonClick()}>About</button>

      {currentPage ? <Home /> : <About />} */}
      <Home/>
      <List />
    </div>
  );
}
export default App;

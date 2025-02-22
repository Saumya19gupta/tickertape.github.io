import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Home from './components/HomePage/Home';
// import HomePage from './components/HomePage/HomePage';

// import PortfolioPage from './components/PortfolioPage/PortfolioPage'
// import GoldPage from './components/GoldPage/GoldPage';
// import ScreenerPage from './components/ScreenerPage/ScreenerPage';
// import CreditPage from './components/CreditPage/CreditPage';
// import SignInPage from './components/SignInPage/SignInPage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white ">

        <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/PortfolioPage" element={<PortfolioPage/>} /> */}
          {/* <Route path="/GoldPage" element={<GoldPage/>} /> */}
          {/* <Route path="/ScreenerPage" element={<ScreenerPage />} /> */}
          {/* <Route path="/CreditPage" element={<CreditPage />} /> */}
          {/* <Route path="/SignInPage" element={<SignInPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import './App.css';
// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// import Navbar from './components/Navbar';  // FIXED: Ensure correct import name
// // import Home from './components/HomePage/Home';
// import Home from './components/HomePage/HomePage';
// import PortfolioPage from './components/PortfolioPage/PortfolioPage';
// import GoldPage from './components/GoldPage/GoldPage';
// import ScreenerPage from './components/ScreenerPage/ScreenerPage';
// import CreditPage from './components/CreditPage/CreditPage';
// import SignInPage from './components/SignInPage/SignInPage';

// function App() {
//   const [searchQuery, setSearchQuery] = useState('');

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-900 text-white">
//         {/* FIXED: Ensure correct casing when using Navbar */}
//         <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />  

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/PortfolioPage" element={<PortfolioPage />} />
//           <Route path="/GoldPage" element={<GoldPage />} />
//           <Route path="/ScreenerPage" element={<ScreenerPage />} />
//           <Route path="/CreditPage" element={<CreditPage />} />
//           <Route path="/SignInPage" element={<SignInPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

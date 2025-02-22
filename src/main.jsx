import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>

<HomePage/>
    {/* <App /> */}
    {/* <Footer /> */}
    {/* <Outlet/> */}
    

  </StrictMode>,
); 





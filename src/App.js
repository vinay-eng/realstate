import './App.css';

import NAVBAR from './components/navbar'
import Contact from './components/contact'
import SearchProperty from './components/SearchProperty'
import LookingFor from "./components/LookingFor"
// import ContactUs from "./components/contactUs"
import TrendingProjects from './components/TrendingProjects';


import background from "./assets/background.jpg";



// import './style/app.css'
function App() {
  return (
    <div>
      <div className='app'>
        <Contact/>
        <NAVBAR/>
        <SearchProperty/>
        
      </div>
      <LookingFor/>
      <TrendingProjects/>
      {/* <ContactUs/> */}
    </div>
    
  );
}

export default App;

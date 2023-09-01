import './App.css';

import NAVBAR from './components/navbar'
import Contact from './components/contact'
import SearchProperty from './components/SearchProperty'
import LookingFor from "./components/LookingFor"
import background from "./assets/background.jpg";
// import './style/app.css'
function App() {
  return (
    <div>
      <div className='app'>
        <Contact/>
        <NAVBAR/>
        <SearchProperty/>
        
        {/* <Body/> */}
      </div>
      <LookingFor/>
    </div>
    
  );
}

export default App;

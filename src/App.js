import './App.css';

import NAVBAR from './components/navbar'
import Contact from './components/contact'
import SearchProperty from './components/SearchProperty'

import background from "./assets/background.jpg";
// import './style/app.css'
function App() {
  return (
    <div className='app'>
      <Contact/>
      <NAVBAR/>
      <SearchProperty/>
      {/* <Body/> */}
    </div>
  );
}

export default App;

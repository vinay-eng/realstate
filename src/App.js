import './App.css';

import NAVBAR from './components/navbar'
import Body from './components/body'

import background from "./assets/background.jpg";
// import './style/app.css'
function App() {
  return (
    <div className='app' style={{ 
      backgroundImage: `url(${background}), linear-gradient(to bottom,red,lightblue)`,
      backgroundRepeat: 'no-repeat',
      width : '100vw',
      backgroundSize : 'cover'
    }}>
      <NAVBAR/>
      <Body/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import {Route, Routes} from 'react-router-dom';

import Home from './views/Home';
import CountryInfo from './views/CountryInfo';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/country-info/:country' element={<CountryInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.scss';
import { Header } from './components';
import { Feed, Login, Profile} from './pages';

import {BrowserRouter, Route, Routes} from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// "proxy": "http://localhost:5000/api/"
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard.js';
import Pretrial from './pages/Pretrial';
import Details from './pages/Details.js';
import Report from './pages/Report.js';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/pretrail' element={<Pretrial/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/report/:id' element={<Report/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

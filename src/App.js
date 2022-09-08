import './App.css';
import Home from './components/Homepage'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Logout from './components/Logout'

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <Routes>
    <Route path='/*' element={<Home/>} />
    <Route path='dashboard' element={<Dashboard/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='logout' element={<Logout/>} />
   </Routes>
  );
}

export default App;

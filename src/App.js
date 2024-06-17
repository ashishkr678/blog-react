import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

const siteProps = {
  name: "Ashish Kumar",
  email: "ashishkumat818@gmail.com",
  gitHub: "ashishkr678",
  instagram: "s_ashish01",
  linkedIn: "ashish-kr01",
  twitter: "s_ashish01",
};


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-richblack-900 flex flex-col relative">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path='/dashboard' element = {
          <PrivateRoute isLoggedIn = {isLoggedIn} >
            <Dashboard/>
          </PrivateRoute>
        }/>

      </Routes>

      <Footer {...siteProps} />

    </div>
  );
}

export default App;

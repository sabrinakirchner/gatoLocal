//import logo from './logo.svg';
import './App.css';
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AuthPage from './pages/AuthPage';
import { useState } from 'react';
import { BrowserRouter, Routes, Route,  Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import {PetfinderProvider} from './petfinderContext'

//import { getUser } from './utilities/users-service'; 


function App() {

  const [User, setUser] = useState()
  return (
    <div className="App">
    <PetfinderProvider>
      {User ? 
      <>
        <BrowserRouter>
        <NavBar /> 
        <Routes>
        <Route path='/orders/new' element={<NewOrderPage/>}/>
        <Route path='/orders/' element={<OrderHistoryPage/>} />
        <Route path='/*' element={<Navigate to="/orders/new" />} />
        </Routes>
        </BrowserRouter>
      </>
      :<AuthPage setUser={setUser}/>
      }
      </PetfinderProvider>
    </div>
  );
}

export default App;

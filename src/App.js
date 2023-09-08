import logo from './logo.svg';
import './App.css';
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AuthPage from './pages/AuthPage';
import { useState } from 'react';
import {BrowserRouter as Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const [User, setUser] = useState(null)
  return (
    <div className="App">
      
      {User ? 
      <Routes>
        <NavBar /> 
        <Route path='/orders/new' element={<NewOrderPage/>}/>
        <Route path='/orders/' element={<OrderHistoryPage/>} />
      </Routes>
      :<AuthPage/>
      }
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import AuthPage from './AuthPage/AuthPage'; 
import NewOrderPage from '../pages/NewOrderPage'; 
import NavBar from './components/NavBar'; 
import { Routes, Route } from 'react-router-dom'; 

function App(){
    const[user, setUser] = useState(null);
    return(
        <main className='App'>
            { user? (
            
            <NavBar /> 
            ): null}
            <Routes> 
                <Route path="/orders/new" element={<NewOrderPage />}/>
                <Route path="/orders" element={<OrderHistoryPage/>}/>
            </Routes>
            {user ? null 
                :
                <AuthPage />}
                
        </main>
    );
}

export default App; 

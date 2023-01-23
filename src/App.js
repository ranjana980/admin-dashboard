import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import DefaultLayout from './DefaultLayout';

function App() {
  const [path, setPath] = useState('/Login')
  const [element, setElement] = useState(<LoginPage />)
  
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<LoginPage />} />
          <Route path={'/DefaultLayout'} element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import DefaultLayout from './DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";
import MemberList from './Components/Members/MemberList';
import AddMember from './Components/Members/AddMember';

const store = createStore(rootReducer, applyMiddleware(thunk));
function App() {
  const [path, setPath] = useState('/Login')
  const [element, setElement] = useState(<LoginPage />)

  return (
    <div className="">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index path='/' element={<LoginPage />} />
            <Route path={'/DefaultLayout'} element={<DefaultLayout />} />
            <Route path='/MemberList' element={<MemberList/>}/>
            <Route path='/AddMember' element={<AddMember/>} />
          </Routes>
        </BrowserRouter>
      </Provider>


    </div>
  );
}

export default App;

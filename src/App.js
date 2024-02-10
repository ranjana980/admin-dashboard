import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import DefaultLayout from './DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";
import MemberList from './Components/Members/MemberList';
import AddMember from './Components/Members/AddMember';
import AllHistory from './Components/Histroy/AllHistory';
import ApiHistory from './Components/Histroy/ApiHistory';
import AdminDayBook from './Components/Histroy/AdminDayBook';

const store = createStore(rootReducer, applyMiddleware(thunk));
function App() {

  return (
    <div className="">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index path='/' element={<LoginPage />} />
            <Route path={'/dashboard'} element={<DefaultLayout />} />
            <Route path='/member-list' element={<MemberList/>}/>
            <Route path='/add-member' element={<AddMember/>} />
            <Route path='/all-history' element={<AllHistory/>}/>
            <Route path='/api-history' element={<ApiHistory/>}/>
            <Route path='/admin-day-book' element={<AdminDayBook/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

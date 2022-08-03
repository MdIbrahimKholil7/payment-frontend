import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Success from './components/Pages/ShippingAndPayment.js/Success';
import Login from './components/Pages/SignUpPage/Login';
import SignUp from './components/Pages/SignUpPage/SignUp';
import Header from './components/Shared/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;

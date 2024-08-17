import { Routes, Route } from 'react-router-dom';
import App from './App';   
import Login from './pages/Login';
import Register from './pages/Register';

const Basic = () => {
    return (
        <Routes>
            
            <Route path="/" element={<App />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/changepassword'/>

        </Routes>
    );
};

export default Basic;

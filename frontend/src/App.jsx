import { Routes, Route } from 'react-router-dom';
import User from './pages/User';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
 
export default App;

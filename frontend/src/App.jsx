import { Routes, Route } from 'react-router-dom';
import User from './pages/User';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';
import WisataPage from './pages/WisataPage/WisataPage';
import AcaraPage  from './pages/AcaraPage/AcaraPage';
import MasterUserPage from './pages/AdminPage/MasterUserPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/wisata" element={<WisataPage />} />
                <Route path="/acara" element={<AcaraPage />} />
                <Route path="/admin/master-user" element={<MasterUserPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
 
export default App;

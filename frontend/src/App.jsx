import { Routes, Route } from 'react-router-dom';
import User from './pages/User';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';
import WisataPage from './pages/WisataPage/WisataPage';
import AcaraPage  from './pages/AcaraPage/AcaraPage';
import LoginAdminPage from './pages/LoginAdminPage/LoginAdmin';
import MasterUserPage from './pages/AdminPage/MasterUserPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/wisata" element={<WisataPage />} />
                <Route path="/acara" element={<AcaraPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/admin/login" element={<LoginAdminPage />} />
                <Route path="/admin/master-user" element={<MasterUserPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
 
export default App;

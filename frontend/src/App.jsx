import { Routes, Route } from 'react-router-dom';
import User from './pages/User';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';
import WisataPage from './pages/WisataPage/WisataPage';
import AdminWisataPage from './pages/AdminPage/AdminWisataPage';
import AdminEventPage from './pages/AdminPage/AdminEventPage';
import AcaraPage  from './pages/AcaraPage/AcaraPage';
import LoginAdminPage from './pages/LoginAdminPage/LoginAdmin';
import MasterUserPage from './pages/AdminPage/MasterUserPage';
import MasterWisataPage from './pages/AdminPage/MasterWisataPage';
import MasterEventPage from './pages/AdminPage/MasterEventPage';
import MasterBundlePage from './pages/AdminPage/MasterBundlePage';
import MasterTransaksiPage from './pages/AdminPage/MasterTransaksiPage';
import ProfilePage from './pages/ProfilePage';
import { ItemSelectPage } from './pages/WisataPage/ItemSelectPage/ItemSelectPage';
import BundlePage from './pages/BundlePage/BundlePage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/wisata" element={<WisataPage />} />
                <Route path="/wisata/:id" element={<ItemSelectPage />} />
                <Route path="/master-wisata" element={<AdminWisataPage />} />
                <Route path="/master-event" element={<AdminEventPage />} />
                <Route path="/acara" element={<AcaraPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/bundle/:id" element={<BundlePage />} />
                <Route path="/admin/login" element={<LoginAdminPage />} />
                <Route path="/admin/master-user" element={<MasterUserPage />} />
                <Route path="/admin/master-wisata" element={<MasterWisataPage />} />
                <Route path="/admin/master-event" element={<MasterEventPage />} />
                <Route path="/admin/master-bundle" element={<MasterBundlePage />} />
                <Route path="/admin/master-transaksi" element={<MasterTransaksiPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
 
export default App;

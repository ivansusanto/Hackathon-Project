import { Routes, Route } from 'react-router-dom';
import User from './pages/User';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage/LandingPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
 
export default App;

import { Routes, Route } from 'react-router-dom';
import User from './pages/User';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <>
            <h1 className='text-red-500'>HELLO WORLD</h1>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
 
export default App;

const Router = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

const {
    fetchUser, registerUser, loginUser
} = require('../controllers/usersController');

router.post('/register', registerUser)
router.post('/login', loginUser)

router.use(AuthMiddleware);

router.get('/', fetchUser);

module.exports = router;
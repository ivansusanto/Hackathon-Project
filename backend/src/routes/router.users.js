const Router = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

const {
    fetchUser, registerUser, loginUser, getUser, updateUser, getOwnUser, updateOwnUser
} = require('../controllers/usersController');

router.post('/register', registerUser)
router.post('/login', loginUser)

router.use(AuthMiddleware);
router.get('/fetch', fetchUser);
router.get('/:user_id', getUser)
router.put('/update/:user_id', updateUser)

router.get('/', getOwnUser);
router.put('/update/', updateOwnUser)

module.exports = router;
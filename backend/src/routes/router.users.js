const Router = require('express');

const router = Router();

const {
    fetchUser, registerUser, loginUser
} = require('../controllers/usersController');

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/', fetchUser);

module.exports = router;
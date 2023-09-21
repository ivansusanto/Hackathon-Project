const Router = require('express');

const router = Router();

const {
    fetchUser
} = require('../controllers/usersController');

router.get('/', fetchUser);

module.exports = router;
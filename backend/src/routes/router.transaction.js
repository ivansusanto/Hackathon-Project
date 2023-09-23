const Router = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

const {
    createTrans, getStatusTrans
} = require('../controllers/transController.js');

router.use(AuthMiddleware)

router.post('/', createTrans)
router.get('/status/:id_trans', getStatusTrans);

module.exports = router;
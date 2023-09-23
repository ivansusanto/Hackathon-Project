const Router = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

const {
    createTrans, getStatusTrans, updateTrans
} = require('../controllers/transController.js');

router.put('/update/:inv', updateTrans)

router.use(AuthMiddleware)
router.post('/', createTrans)
router.get('/status/:inv', getStatusTrans);

module.exports = router;
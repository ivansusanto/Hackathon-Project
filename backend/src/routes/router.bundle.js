const Router = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const AdminMiddleware = require('../middlewares/AdminMiddleware');

const router = Router();

const {
    createBundle, updateBundle, deleteBundle, fetchBundle, getBundle
} = require('../controllers/bundlesController');

router.use(AuthMiddleware);

router.get('/', fetchBundle)
router.get('/:id_bundle', getBundle);

router.use(AdminMiddleware);

router.post('/create', createBundle);
router.put('/update/:id_bundle', updateBundle);
router.delete('/delete/:id_bundle', deleteBundle);

module.exports = router;
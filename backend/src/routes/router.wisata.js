const Router = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const AdminMiddleware = require('../middlewares/AdminMiddleware');

const router = Router();

const {
    createWisata, updateWisata, deleteWisata, fetchWisata, getWisata
} = require('../controllers/wisataController');

router.use(AuthMiddleware)

router.get('/', fetchWisata)
router.get('/:id_wisata', getWisata);

router.use(AdminMiddleware);

router.post('/create', createWisata);
router.put('/update/:id_wisata', updateWisata);
router.delete('/delete/:id_wisata', deleteWisata);

module.exports = router;
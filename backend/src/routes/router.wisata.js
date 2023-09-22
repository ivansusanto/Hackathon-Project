const Router = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

const {
    createWisata, updateWisata, deleteWisata, fetchWisata, getWisata
} = require('../controllers/wisataController');

router.use(AuthMiddleware)

router.post('/create', createWisata);
router.put('/update', updateWisata);
router.delete('/delete/:id_wisata', deleteWisata);
router.get('/', fetchWisata)
router.get('/:id_wisata', getWisata);

module.exports = router;
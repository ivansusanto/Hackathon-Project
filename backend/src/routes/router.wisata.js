const Router = require('express');

const router = Router();

const {
    createWisata, updateWisata, deleteWisata, fetchWisata, getWisata
} = require('../controllers/wisataController');

router.post('/create', createWisata);
router.put('/update', updateWisata);
router.delete('/update', deleteWisata);
router.get('/', fetchWisata)
router.get('/:id_wisata', getWisata);

module.exports = router;
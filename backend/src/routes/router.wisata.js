const Router = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const AdminMiddleware = require('../middlewares/AdminMiddleware');
const MulterUpload = require('../validations/Multer');

const router = Router();
const upload = MulterUpload;

const {
    createWisata, updateWisata, deleteWisata, fetchWisata, getWisata
} = require('../controllers/wisataController');

router.get('/', fetchWisata)
router.get('/:id_wisata', getWisata);

router.use(AuthMiddleware)
router.use(AdminMiddleware);

router.post('/create', upload.single('foto'), createWisata);
router.put('/update/:id_wisata', upload.single('foto'), updateWisata);
router.delete('/delete/:id_wisata', deleteWisata);

module.exports = router;
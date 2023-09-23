const Router = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const AdminMiddleware = require('../middlewares/AdminMiddleware');
const MulterUpload = require('../validations/Multer');

const router = Router();
const upload = MulterUpload;

const {
    createEvent, updateEvent, deleteEvent, fetchEvent, getEvent
} = require('../controllers/eventsController');

router.get('/', fetchEvent)
router.get('/:id_event', getEvent);

router.use(AuthMiddleware)
router.use(AdminMiddleware);

router.post('/create', upload.single('foto'), createEvent);
router.put('/update/:id_event', upload.single('foto'), updateEvent);
router.delete('/delete/:id_event', deleteEvent);

module.exports = router;
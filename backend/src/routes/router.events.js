const Router = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const AdminMiddleware = require('../middlewares/AdminMiddleware');

const router = Router();

const {
    createEvent, updateEvent, deleteEvent, fetchEvent, getEvent
} = require('../controllers/eventsController');

router.use(AuthMiddleware);

router.get('/', fetchEvent)
router.get('/:id_event', getEvent);

router.use(AdminMiddleware);

router.post('/create', createEvent);
router.put('/update/:id_event', updateEvent);
router.delete('/delete/:id_event', deleteEvent);

module.exports = router;
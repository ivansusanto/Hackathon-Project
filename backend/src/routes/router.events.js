const Router = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

const {
    createEvent, updateEvent, deleteEvent, fetchEvent, getEvent
} = require('../controllers/eventsController');

router.use('AuthMiddleware');

router.post('/create', createEvent);
router.put('/update', updateEvent);
router.delete('/delete', deleteEvent);
router.get('/', fetchEvent)
router.get('/:id_event', getEvent);

module.exports = router;
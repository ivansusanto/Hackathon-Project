const Router = require('express');

const router = Router();

const {
    createEvent, updateEvent, deleteEvent, fetchEvent, getEvent
} = require('../controllers/eventsController');

router.post('/create', createEvent);
router.put('/update', updateEvent);
router.delete('/delete', deleteEvent);
router.get('/', fetchEvent)
router.get('/:id_event', getEvent);

module.exports = router;
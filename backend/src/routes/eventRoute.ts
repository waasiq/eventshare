import express from 'express';
import eventController from '../controllers/eventController';


const app = express();
const eventRouter = express.Router();

app.use('/api/events', eventRouter);
eventRouter.get('/', eventController.getEvents);
eventRouter.get('/:username', eventController.getEventsByUser);
eventRouter.post('/register', eventController.registerEvent);
eventRouter.post('/setrating', eventController.setRating);


export default eventRouter;

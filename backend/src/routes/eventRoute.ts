import express from 'express';
import eventController from '../controllers/eventController';


const app = express();
const eventRouter = express.Router();

app.use('/api/events', eventRouter);
eventRouter.post('/register', eventController.registerEvent);

export default eventRouter;

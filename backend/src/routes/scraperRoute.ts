import express from 'express'
import scraperRoute from '../controllers/scraperController'

const app = express();
const scraperRouter = express.Router();

app.use('/api/', scraperRouter);
scraperRouter.get('/facebook', scraperRoute.getFacebookEvents);

export default scraperRouter;
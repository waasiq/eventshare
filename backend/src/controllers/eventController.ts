import { Request, Response, NextFunction } from 'express';
import Event from '../models/eventModel';

const registerEvent = async (req: Request, res: Response, next: NextFunction) => {
    const { username, eventName, eventLink, imgLink, location } = req.body;

    if (!username || !eventName) {
        return res.status(400).json({
            status: 'fail',
            message: 'Please provide all fields'
        });
    }

    try {
        const newEvent = await Event.create({
            username,
            eventName,
            eventLink,
            imgLink,
            location,
        });

        await newEvent.save();

        res.status(200).json({
            status: 'Register Success',
            data: newEvent
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

const getEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const events = await Event.find();

        res.status(200).json({
            status: 'success',
            data: events
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

const getEventsByUser = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;
    try {
        // if rating is 0 then it will be excluded 
        const events = await Event.find({ username, rating: { $ne: 0 } });

        res.status(200).json({
            status: 'success',
            data: events
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

const setRating = async (req: Request, res: Response, next: NextFunction) => {
    const { username, eventName, rating } = req.body;

    try {
        const event = await Event.findOne({ username, eventName });

        if (event) {
            event.rating = rating;
            await event.save();
        }

        res.status(200).json({
            status: 'success',
            data: event
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};



const eventController = {
    registerEvent, 
    getEvents,
    getEventsByUser,
    setRating
};

export default eventController;
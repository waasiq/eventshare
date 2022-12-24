import { Request, Response, NextFunction } from 'express';
import Event from '../models/eventModel';

const registerEvent = async (req: Request, res: Response, next: NextFunction) => {
    const { username, eventName, eventLink } = req.body;

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
            eventLink
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

const eventController = {
    registerEvent
};

export default eventController;
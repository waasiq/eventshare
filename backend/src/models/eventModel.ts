import mongoose, { Document, Schema, model } from "mongoose";

interface IEvent extends Document {
    _doc: any;
    username: string;
    eventName: string;
    link: string;
}

const eventModel = new Schema({   
    eventName: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        lowercase: true,
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    link: {
        type: String,
    },
}, { timestamps: true });

const Event = model<IEvent>('Event', eventModel);

export default Event;
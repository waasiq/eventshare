import mongoose, { Document, Schema, model } from "mongoose";

interface IEvent extends Document {
    _doc: any;
    username: string;
    eventName: string;
    link: string;
    location: string;
    rating: number;
    imgLink: string;
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
    rating: {
        type: Number,
        default: -1,
        maximum: 10,
        minimum: 0,
    },
    location: {
        type: String,
        default: 'N/A',
    },
    imgLink: {
        type: String,
        default: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    }
}, { timestamps: true });

const Event = model<IEvent>('Event', eventModel);

export default Event;
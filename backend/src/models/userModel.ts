import mongoose, { Document, Schema, model } from "mongoose";

interface IUser extends Document {
    _doc: any;
    name: string;
    username: string;
    email: string;
    password: string;
    avatar: string;
    role: string;
    gender: string;
    country: string;
    city: string;
    followers: mongoose.Schema.Types.ObjectId;
    following: mongoose.Schema.Types.ObjectId;
}

const userModel = new Schema({   
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
        trim: true,
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        lowercase: true,
        minlength: 3,
        maxlength: 20,
        unique: true,
        trim: true,
        validate: {
            validator: (username:string) => {
                const regex = /^[a-z]+_?[a-z0-9]{1,}?$/ig;
                return regex.test(username);
            },
            message: 'Username Must preceed with letters followed by _ or numbers eg: john23 | john_23'
        }
    },
    email: {
        type: String,
        minLength: 12,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        validate: {
            validator: (email:string) => {
                const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(email);
            },
            message: '{VALUE} is invalid.'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6, 
        maxlength: 100,
    },
    avatar: {
        type: String,
        default: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'
    },
    role: {
        type: String,
        default: 'user'
    },
    gender: {
        type: String,
        default: 'male'
    },
    city: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
}, { timestamps: true });

const User = model<IUser>('User', userModel);

export default User;
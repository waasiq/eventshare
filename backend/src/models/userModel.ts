import mongoose, { Document, Schema, model } from "mongoose";

interface IUser extends Document {
    name: string;
    username: string;
    email: string;
    password: string;
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
});

const User = model<IUser>('User', userModel);

export default User;
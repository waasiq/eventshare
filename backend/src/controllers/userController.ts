import { NextFunction, Request, Response } from 'express';
import User from '../models/userModel';

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find();
        
        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        }); 
    }

};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};  

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
}

export {
    getUsers,
    getUser,
    createUser,
    updateUser
};
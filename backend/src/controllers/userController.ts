import { NextFunction, Request, Response } from 'express';
import User from '../models/userModel';

const userController = {
    searchUser: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await User.find({
                username: { $regex: req.query.username as string }
            })
                .limit(10)
                .select("fullname username avatar");

            return res.json({ users });
        } catch (error) {
            next(error);
        }
    },
    getUsers: async (req: Request, res: Response, next: NextFunction) => {
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
    },
    getUser: async (req: Request, res: Response, next: NextFunction) => {
        const user = await User.findById(req.params.id);
        res.json(user);
    },
    updateUser: async (req: Request, res: Response, next: NextFunction) => {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    }
}

export default userController;
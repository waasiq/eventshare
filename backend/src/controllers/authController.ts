import User from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const createAccessToken = (payload: any): string =>{
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '1d' });
}

const createRefreshToken = (payload: any): string => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: '30d' });
}

const register = async (req: Request, res: Response, next: NextFunction) => {
    const { name, username, email, password, gender, country, city } = req.body;

    if (!name || !username || !email || !password) {
        return res.status(400).json({ message: 'Please fill all the fields' });
    }

    let lowerCaseUsername = username.toLowerCase().replace(/ /g, '');
    try {
        //* Check if a user is present already in DB.
        const user = await User.findOne({ username: lowerCaseUsername });
        if (user) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // //* Check if a mail has been used already.
        const email_check = await User.findOne({ email });        
        if (email_check) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            name,
            username: lowerCaseUsername,
            email,
            password: hashedPassword,
            gender,
            country,
            city
        });
       
        const accessToken = createAccessToken({ id: newUser._id });
        const refreshToken = createRefreshToken({ id: newUser._id });

        res.cookie('refreshtoken', refreshToken, {
            httpOnly: true,
            path: '/api/refresh_token',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        });

        await newUser.save();

        res.status(200).json({
            status: 'Register Success',
            accessToken,
            user: {
                ...newUser._doc,
                password: ''
            }
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

const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        .populate('followers following', '-password');

        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        const accessToken = createAccessToken({ id: user._id });
        const refreshToken = createRefreshToken({ id: user._id });
        
        res.cookie('refreshtoken', refreshToken, {
            httpOnly: true,
            path: '/api/refresh_token',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        });

        res.status(200).json({
            status: 'Login success!',
            accessToken,
            user: {
                ...user._doc,
                password: ''
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

const logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.clearCookie('refreshtoken', { path: '/api/refresh_token' });
        return res.status(200).json({ message: 'Logged out' });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

const generateAccessToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const rf_token = req.cookies.refreshtoken;
        if (!rf_token) {
            return res.status(400).json({ message: 'Please login or register' });
        }

        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET as string, async (err:any, result:any) => {
            if (err) {
                return res.status(400).json({ message: 'Please login or register' });
            }
            
            const user = await User.findById(result.id).select('-password')
            .populate('followers following', '-password');

            if (!user) {
                return res.status(400).json({ message: 'User does not exist' });
            }

            const accessToken = createAccessToken({ id: result.id });
            res.status(200).json({ 
                accessToken,
                user
            });
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

const authController = {
    register,
    login,
    logout,
    generateAccessToken
}

export default authController;

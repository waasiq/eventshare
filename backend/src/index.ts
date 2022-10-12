import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoute';
import authRouter from './routes/authRoute';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.LOCAL_DB as string,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions,
).then (() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log(err);
});

app.use('/api/users', userRouter);
app.use('/api/', authRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
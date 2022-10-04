import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import userRouter from './routes/userRoute';

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@eraslify.y9rad8s.mongodb.net/?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions, () => {
        console.log('Connected to DB');
    }
);

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
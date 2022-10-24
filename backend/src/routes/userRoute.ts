import express from 'express';
import { getUsers, getUser, updateUser } from '../controllers/userController';

const app = express();
const userRouter = express.Router();

app.use('/api/users', userRouter);
userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.patch('/:id', updateUser);

export default userRouter;
import express from 'express';
import { getUsers, getUser, createUser, updateUser } from '../controllers/userController';

const app = express();
const userRouter = express.Router();

app.use('/api/users', userRouter);
userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.patch('/:id', updateUser);

export default userRouter;
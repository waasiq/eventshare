import express from 'express';
import userController from '../controllers/userController';

const app = express();
const userRouter = express.Router();

app.use('/api/users', userRouter);
userRouter.get('/search', userController.searchUser);
userRouter.get('/', userController.getUsers);
userRouter.get('/:id', userController.getUser);
userRouter.patch('/:id', userController.updateUser);

export default userRouter;
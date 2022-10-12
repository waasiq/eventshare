import express from 'express'
import authRoute from '../controllers/authController'

const app = express();
const authRouter = express.Router();

app.use('/api/', authRouter);
authRouter.post('/login', authRoute.login);
authRouter.post('/register', authRoute.register);
authRouter.post('/logout', authRoute.logout);
authRouter.post('/refresh_token', authRoute.generateAccessToken);

export default authRouter;
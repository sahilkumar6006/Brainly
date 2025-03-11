import { Router } from 'express';
import userRouter from './userRoutes/User.routes';

const mainRouter = Router();

mainRouter.use('/user', userRouter);



export default mainRouter;
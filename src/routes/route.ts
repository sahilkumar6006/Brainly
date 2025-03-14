import { Router } from 'express';
import userRouter from './userRoutes/User.routes';
import contentRoutes from './contentRoutes/content.routes';

const mainRouter = Router();

mainRouter.use('/user', userRouter);
mainRouter.use('/content', contentRoutes);



export default mainRouter;
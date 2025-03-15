import { Router } from 'express';
import userRouter from './userRoutes/User.routes';
import contentRoutes from './contentRoutes/content.routes';
import shareRoutes from './shareLink/share.routes';

const mainRouter = Router();

mainRouter.use('/user', userRouter);
mainRouter.use('/content', contentRoutes);
mainRouter.use('/share', shareRoutes);



export default mainRouter;
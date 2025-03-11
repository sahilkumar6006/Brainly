import { Router } from 'express';
import { Signin, SignUp } from '../../controllers/user.controller';

const userRouter = Router();


userRouter.post('/signup', SignUp);
userRouter.post('/signin', Signin);

export default userRouter;
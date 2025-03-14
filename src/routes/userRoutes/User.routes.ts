import { Router } from 'express';
import { Signin, Signup } from '../../controllers/user.controller';
const userRouter = Router();

userRouter.post('/signup', Signup);
userRouter.post('/signin', Signin);

export default userRouter;

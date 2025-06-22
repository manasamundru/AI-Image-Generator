import {registerUser,loginUser,userCredits} from '../controllers/userController.js'
import express from 'express';
import userAuth from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/credits',userAuth,userCredits);

export default userRouter;


//localhost:4000/api/user/register-->execute registerUser contoller function
//localhost:4000/api/user/login-->execute loginUser contoller function


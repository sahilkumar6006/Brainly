import User from "../ models/user.model";
import { Request, Response } from 'express';
import { jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";

const JWT_PASSWORD = 1232422

const Signin = async (req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);
    User.create({
        username: username,
        password: hashedPassword,
    })

    res.json({
        message: "User singed Up"
    })
}


const SignUp = async (req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;


    const existingUser = await User.findOne({
        username,
        password
    })

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}


export {
    Signin,
    SignUp
}
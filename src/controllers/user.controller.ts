import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../ models/user.model";
import { JWT_SECRET } from "../config";

// Signup function (Register user)
const Signup = async (req: any, res: any) => {
    try {
        const { username, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            password: hashedPassword,
        });

        res.status(201).json({ message: "User signed up successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error signing up", error });
    }
};

// Login function (Authenticate user)
const Signin = async (req: any, res: any) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const existingUser = await User.findOne({ username });
        if (!existingUser) {
            return res.status(403).json({ message: "Incorrect credentials" });
        }

        // Compare hashed password
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(403).json({ message: "Incorrect credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: existingUser._id }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Sign-in successful", token });
    } catch (error) {
        res.status(500).json({ message: "Error signing in", error });
    }
};

export { Signup, Signin };

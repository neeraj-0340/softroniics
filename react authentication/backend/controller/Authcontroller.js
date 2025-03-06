import user from "../models/userSchema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function initial(req, res) {
    res.send("welcomeeeee")
}

export async function register(req, res) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "data not found" })
        }

        let existingUser = await user.findOne({ email })

        if (existingUser) {
            return res.status(409).json({ message: "username already exist try another username" })
        }

        const salt = parseInt(process.env.SALT) || 10
        const hashedpassword = await bcrypt.hash(password, salt)

        await user.create({ name, email, password: hashedpassword })

        return res.status(201).json({ message: "user created" })

    } catch (error) {
        console.log(error);

        return res.status(500).json({ message: "Db error", error: error })
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "data not found" })
        }

        let users = await user.findOne({ email });
        if (!users) {
            return res.status(400).json({ message: "user not found" })
        }

        const isvalidpassword = await bcrypt.compare(password, users.password)
        if (!isvalidpassword) {
            return res.status(401).json({ message: "password wrong or invalid credentials" })
        }

        const token = jwt.sign({ userid: users._id, email: users.email }, process.env.KEY, { expiresIn: "1h" })
        return res.status(200).json({ message: "login successful", token })

    } catch (error) {
        return res.status(500).json({ message: "Db error", error: error })

    }
}
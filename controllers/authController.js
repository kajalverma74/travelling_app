const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken');
const User = require('../models/userModels')

async function signup(req, res) {
    try {
        const { userName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            userName,
            email, password: hashedPassword
        });

        res.status(201).json({message:'Signup Successfull', user });

    }

    catch (err) {
        res.status(400).json({
            error: err.message
        });
    }

}


async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('User not found');
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET, 
            { expiresIn: "8h" }
        );

        res.status(200).json({
            message: 'Login Successful',
            token
        });

    } catch (err) {
        res.status(401).json({
            err: err.message
        });
    }
}


module.exports = {
    signup,
    login
}


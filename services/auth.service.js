const userRepository = require('../repositories/user.repository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (email, password) => {
    
    const existingUser = await userRepository.findByEmail(email);
    if(existingUser)
    {
        throw new Error('Email is already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userRepository.save({
        email,
        password: hashedPassword
    });

    return { token, id: user._id, email: user.email };
};

exports.loginUser = async (email, password) => {

    const user = await userRepository.findByEmail(email);

    if(!user)
    {
        throw new Error('Invalid Credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    if(!isMatch)
    {
        throw new Error("Invalid Credentials");
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '1h'}
    );

    return { token, email: user.email };
}

const User = require('../models/user.model');

exports.findByEmail = async (email) => {
    return await User.findOne({ email }).lean();
};

exports.save = async (userData) => {
    const user = new User(userData);
    return await user.save();
};


exports.findUsersPaginated = async (skip, limit) => {
    return await User.find()
        .select('-password') 
        .skip(skip)
        .limit(limit)
        .lean();
};

exports.countTotalUsers = async () => {
    return await User.countDocuments();
};
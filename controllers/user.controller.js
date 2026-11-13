const userService = require('../services/user.service');

exports.getUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;

        const result = await userService.getPaginatedUsers(page, limit);

        res.status(200).json({ success: true, data: result });
        
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const userRepository = require('../repositories/user.repository');

exports.getPaginatedUsers = async (page = 1, limit = 10) => {
    const skip = (page - 1) * limit;

    const [users, totalCount] = await Promise.all([
        userRepository.findUsersPaginated(skip, limit),
        userRepository.countTotalUsers()
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return {
        users,
        pagination: {
            totalUsers: totalCount,
            totalPages,
            currentPage: page,
            limit
        }
    };
};
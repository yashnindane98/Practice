// seed.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/user.model'); // Ensure this path is correct

async function seedDatabase() {
    try {
        // Replace with your actual local MongoDB connection string
        await mongoose.connect('mongodb://localhost:27017/local_db');
        console.log('Connected to MongoDB');

        // Clear existing users to avoid duplicate key errors on emails
        await User.deleteMany({});
        console.log('Cleared existing users');

        const hashedPassword = await bcrypt.hash('password123', 10);
        const batchSize = 1000;
        const totalUsers = 50000;

        for (let i = 0; i < totalUsers; i += batchSize) {
            const batch = [];
            for (let j = 0; j < batchSize; j++) {
                batch.push({
                    email: `dummyuser_${i + j}@example.com`,
                    password: hashedPassword
                });
            }
            await User.insertMany(batch);
            console.log(`Inserted batch: ${i + batchSize} / ${totalUsers}`);
        }

        console.log('Successfully seeded 50,000 users!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
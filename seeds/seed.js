const sequelize = require('../config/connection');
const { User, Tour } = require('../models');

const userData = require('./userData.json');
const tourData = require('./tourData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const tour of tourData) {
    await Tour.create({
      ...tour,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

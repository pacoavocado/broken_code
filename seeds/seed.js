const sequelize = require('../config/connection');
const { User, Tour, Album } = require('../models');

const userData = require('./userData.json');
const tourData = require('./tourData.json');
const albumData = require('./albumData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const tour of tourData) {
    await Tour.create({
      ...tour,
      
    });
  }

  for (const album of albumData) {
    await Album.create({
      ...album,
     
    });
  }
  
  process.exit(0);
};


seedDatabase();

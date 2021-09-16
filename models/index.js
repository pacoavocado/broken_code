const User = require('./User');
const Album = require('./Album');
const Tour = require('./Tour');

User.hasMany(Album, {
  foreignKey: 'album_id',
  onDelete: 'CASCADE'
});

User.hasMany(Tour, {
  foreignKey: 'tour_id',
  onDelete: 'CASCADE'
});

Album.belongsTo(User, {
  foreignKey: 'user_id'
});

Tour.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Album, Tour };

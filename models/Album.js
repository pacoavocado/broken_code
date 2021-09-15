const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Album extends Model {}

Album.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    alubm_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    
    description: {
      type: DataTypes.STRING,
    },
    album_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'album',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'album',
  }
);
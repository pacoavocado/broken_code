const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tour extends Model {}

Tour.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    show_date: {
      type: DataTypes.DATE,
      allowNull: false,

    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tour',
  }
);

module.exports = Tour;

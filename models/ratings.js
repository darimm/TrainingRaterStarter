'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ratings = sequelize.define('Ratings', {
    rating: {
      type: DataTypes.DECIMAL, 
      allowNull: false,
      min: { 
        args: [0],
        msg: 'Rating must be greater than 0'
      },
      max: { 
        args: [5],
        msg: 'Rating must be less than or equal to 5'
      }
    },
    sessionId: { type: DataTypes.INTEGER, allowNull: false},
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Ratings.belongsTo(models.Sessions, {foreignKey: 'sessionId', sourceKey: 'id'}) // associations can be defined here
      }
    }
  });
  return Ratings;
};
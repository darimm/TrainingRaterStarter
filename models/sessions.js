'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sessions = sequelize.define('Sessions', {
    name: { type: DataTypes.STRING, allowNull: false },
    startTime: { type: DataTypes.DATE, allowNull: false },
    location: DataTypes.STRING

  }, {
      classMethods: {
        associate: function(models) {
          Sessions.hasMany(models.Ratings, {foreignKey: 'sessionId', sourceKey: 'id'}) // associations can be defined here
        }
  }});
  return Sessions;
};
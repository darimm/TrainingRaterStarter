'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sessions = sequelize.define('Sessions', {
    name: { type: DataTypes.STRING, allowNull: false },
    startTime: { type: DataTypes.DATE, allowNull: false },
    location: DataTypes.STRING

  }, { });
  Sessions.associate =  function(models) {
      models.Sessions.hasMany(models.Ratings, {foreignKey: 'sessionId', sourceKey: 'id'}); 
  }
  return Sessions;
};
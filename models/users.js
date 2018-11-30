'use strict';
const bcrypt = require('bcrypt');
const bcrypt_p = require('bcrypt-promise');

module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING, 
      unique: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: {msg: 'Email is invalid'} },
    },
    phone: {
      type: DataTypes.String,
      allowNull: true,
      validate: { 
        len: {
          args: [7,20], 
          msg: 'Phone Number is invalid'}, 
          isNumeric: {msg: 'Not a valid phone number.'}
        }
      },
    isTrainer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  }, 
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Users.beforeSave(async (user) => {
    let err;
    if (user.changed('password')) {
      let [salt, hash] = await to(bcrypt.genSalt(10));
      if(err) TE(err.message, true);
      [err,hash] = await to(bcrypt.hash(user.password,salt));
      if (err) TE(err.message, true);
      user.password=hash;
    }
  });
  return Users;
};
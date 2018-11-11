'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userName: 'mrah',
      firstName: 'Mahjong',
      lastName: 'Rah',
      password: 'abecdef',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
      },
      {
        userName: 'hjamrho',
        firstName: 'Hang',
        lastName: 'Jam Rho',
        password: 'hcouibtn1',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        userName: 'hjarohm',
        firstName: 'Hang',
        lastName: 'Jar Ohm',
        password: 'obmtinihi',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),

      },
      {
        userName: 'rhamjohn',
        firstName: 'Rag',
        lastName: 'Ham John',
        password: 'bcrxhutonhcr8',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),

      },
      {
        userName: 'hjanhog',
        firstName: 'Harm',
        lastName: 'Jan Hog',
        password: 'bxuhcirhhtns3',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),

      },
      {
        userName: 'jahhonmr',
        firstName: 'Jag',
        lastName: 'Ah Hon Mr',
        password: 'omrlh2co45rhdt',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        userName: 'hjarhong',
        firstName: 'Ham',
        lastName: 'Jar Hong',
        password: 'ohioi23d5t6nhouddpf',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users',null, {});
  }
};

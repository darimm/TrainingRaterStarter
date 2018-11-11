'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sessions', [
    { 
      Name: 'John Teaches Angular', 
      Location: 'Miles-U 1', 
      startTime: new Date('10-20-2018 17:30:00'),
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
    { 
      Name: 'Scott Teaches AWS', 
      Location: 'Miles-U 2', 
      startTime: new Date('10-15-2018 09:00:00'),
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),  
    },
    { 
      Name: 'Jack Teaches PODIS', 
      Location: 'Jacks Desk', 
      startTime: new Date('10-20-2018 11:00:00'),
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),  
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sessions', null, {});
  }
};

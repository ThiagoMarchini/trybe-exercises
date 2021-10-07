module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'O Livro do JS',
        author: 'John Doe',
        pageQuantity: 200,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Livro do Express',
        author: 'Jane Doe',
        pageQuantity: 350,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
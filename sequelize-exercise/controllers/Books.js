const express = require('express');
const { Book } = require('../models');
const router = express.Router();

// GET /book
router.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll({
      order: [
        ['title', 'ASC'],
        ['createdAt', 'ASC']
      ]
    }
    );

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

// GET /book/:id
router.get('/:id', async(req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch(e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// POST /book
router.post('/', async(req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const newBook = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch(e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// POST /book/:id
router.post('/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    console.log(updateBook);

    if(!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch(e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// DELETE /book/:id
router.delete('/:id', async(req, res) => {
  try {
    const { id } = req.params;

    const deleteBook = await Book.destroy(
      { where: { id } }
    );

    console.log(deleteBook);

    return res.status(200).json({ message: 'Livro excluído com sucesso!'})

  } catch(e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

module.exports = router;
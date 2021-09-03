const connection = require('./connection');
const { ObjectId } = require('mongodb');

// Busca todos os autores do banco. (MySQL)
/*
const getAll = async() => {
  const [books] = await connection.execute(
    'SELECT title FROM model_example.books;',
  );
  return books;
};
*/

// // Busca todos os autores do banco. (MongoDB)
const getAll = async() => {
  return connection()
    .then((db) => db.collection('books').find().toArray());
}

// Busca pelos livros de um autor pelo id (MySQL)
/*
const getById = async (id) => {
  const query = 'SELECT title FROM model_example.books WHERE author_id = ?';
  const [books] = await connection.execute(query, [id]);
  if (books.length === 0) return null;
  return books;
}
*/

// Busca pelos livros de um autor pelo id (MongoDB)
const getById = (id) => {
  return connection()
    .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray());
}

const isValid = async(title, id) => {
  if(!title || typeof(title) !== 'string' || title === '' || title.length < 3) return false;
  if (!id || id === '') return false;
  const queryId = parseInt(id, 10);
  //MySQL
  // const query = 'SELECT id FROM model_example.books WHERE author_id = ?';
  // const ids = await connection.execute(query, [queryId]);
  // if(ids[0].length === 0) return false;
  //MongoDB
  const ids = await getById(queryId);
  console.log(ids);
  if(ids.message === "Not found") return false;
  return true;
}

//Criação de um novo livro com MySQL:
/*
const create = async(title, id) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, id],
);
*/

//Criação de um novo livro com o MongoDB:
const create = async(title, author_id) => {
  connection()
    .then((db) => db.collection('books').insertOne({ title, author_id }))
    .then(result => ({ _id: result.insertedId, title, author_id }));
}

module.exports = {
  getAll,
  getById,
  isValid,
  create,
};


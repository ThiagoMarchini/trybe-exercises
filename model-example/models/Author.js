const connection = require('./connection');
const { ObjectId } = require('mongodb');

// Cria uma string com o nome completo do autor
const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

    return {
      id,
      firstName,
      middleName,
      lastName,
      name: fullName,
    };
};

// Serializa o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

// Busca todos os autores do banco. (MySQL)
/* const getAll = async() => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors',
  );
  return authors.map(serialize).map(getNewAuthor);
  };
*/

// Busca todos os autores do banco. (MongoDB)
const getAll = async() => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => 
      authors.map(({ _id, firstName, middleName, lastName }) =>
        getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      )
    );
}

/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado (MySQL)
*/
/*
const findById = async (id) => {
  // Repare que substituímos o id por `?` na query.
  // Depois, ao executá-la, informamos um array com o id para o método `execute`.
  // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
  const [ authorData ] = await connection.execute(query, [id]);
  
  if (authorData.length === 0) return null;
  
  // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
  const { firstName, middleName, lastName } = serialize(authorData[0]);
  
  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
};
*/

/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado (MongoDB)
*/
const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
      return null;
  }

  const authorData = await connection()
      .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

// Criando um novo autor (MySQL)
/*
const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);
*/

//Criando um novo autor (MongoDB)
const create = async(firstName, middleName, lastName) => {
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ _id: result.insertedId, firstName, middleName, lastName }));
}


module.exports = {
  getAll,
  findById,
  isValid,
  create,
};

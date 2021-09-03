const { ObjectId } = require('bson');
const connection = require('./connection');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray());
}

const getById = async(id) => {
  if(!ObjectId.isValid(id)) return {
    error: true,
    message: "Usuário não encontrado"
  }

  const authorData = await connection()
    .then((db) => db.collection('users').findOne(new ObjectId(id)));

  if(!authorData) return {
    error: true,
    message: "Usuário não encontrado"
  }

  return authorData;
}

const isValid = (firstName, lastName, email, password) => {
  if (!firstName || firstName === '' || typeof firstName !== 'string') return { error: true, message: 'O campo firstName não pode ser vazio' };
  if (!lastName || lastName === '' || typeof lastName !== 'string') return { error: true, message: 'O campo lastName não pode ser vazio' };
  if (!email || email === '' || typeof email !== 'string') return { error: true, message: 'O campo email não pode ser vazio' };
  if (!password || password.length < 6 || typeof password !== 'string') return { error: true, message: 'O campo password não pode ter menos de 6 caracteres' };

  return null;
};

const create = async(firstName, lastName, email, password) =>
  connection()
    .then((db) => db.collection('users').insertOne({
      firstName, lastName, email, password
    }))
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));

const update = async(id, firstName, lastName, email, password) => {
  return connection()
    .then((db) => db.collection('users').updateOne(
      { _id: new ObjectId(id) },
      {$set:
        {
          firstName,
          lastName,
          email,
          password,
        }
      }
    ));
}

module.exports = {
  create,
  isValid,
  getAll,
  getById,
  update,
}

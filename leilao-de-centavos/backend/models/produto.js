const connection = require('./connection');
const { ObjectId } = require('mongodb');

const create = async ({ name, price, image }) => {
  const db = await connection.getConnection();
  const newProduct = await db.collection('products').insertOne({ name, price, image });

  return newProduct;
};

const getAll = async () => {
  const db = await connection.getConnection();
  const result = await db.collection('products').find().toArray();

  return result;
};

const findById = async (id) => {
  const db = await connection.getConnection();
  const result = await db.collection('products').findOne(new ObjectId(id));

  return result;
};

const increasePrice = async (id) => {
  const db = await connection.getConnection();
  console.log(id);
  const result = await db.collection('products').updateOne({ _id: new ObjectId(id) }, { $inc: { price: 5 }})

  return result;
};

module.exports = {
  create,
  getAll,
  increasePrice,
  findById,
};
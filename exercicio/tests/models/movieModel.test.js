const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const MoviesModel = require('../../models/movieModel');

describe('Testa o Model', () => {
  describe('Busca todos os filmes no BD', () => {
    describe('quando não existe nenhum filme criado', async () => {
      const DBServer = new MongoMemoryServer();

      before(async () => {
        const URLMock = await DBServer.getUri();
        const connectionMock = await MongoClient
          .connect(URLMock, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });

        sinon.stub(MongoClient, 'connect')
          .resolves(connectionMock);
      });

      after(async () => {
        MongoClient.connect.restore();
        await DBServer.stop();
      });

      it('retorna um array', async () => {
        const response = await MoviesModel.getAll();

        expect(response).to.be.an('array');
      });

      it('o array está vazio', async () => {
        const response = await MoviesModel.getAll();

        expect(response).to.be.empty;
      });

    });

    describe('quando existem filmes criados', () => {
      const DBServer = new MongoMemoryServer();

      before(async () => {
        const URLMock = await DBServer.getUri();
        const connectionMock = await MongoClient
          .connect(URLMock, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });

        sinon.stub(MongoClient, 'connect')
          .resolves(connectionMock);

        const moviesCollection = await connectionMock.db('model_example').collection('movies');

        await moviesCollection.insertOne({
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        })
      });

      after(async () => {
        MongoClient.connect.restore();
        await DBServer.stop();
      });

      it('retorna um array', async () => {
        const response = await MoviesModel.getAll();

        expect(response).to.be.an('array');
      });

      it('o array não está vazio', async () => {
        const response = await MoviesModel.getAll();

        expect(response).to.be.not.empty;
      });

      it('o array possui itens do tipo objeto', async () => {
        const [ item ] = await MoviesModel.getAll();

        expect(item).to.be.an('object');
      });

      it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
        const [ item ] = await MoviesModel.getAll();

        expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
      });

    });
  });

  describe('Busca um filme, por id, no BD', async() => {
    describe('quando o id existe no BD', async() => {
      const DBServer = new MongoMemoryServer();
  
      before(async () => {
        const URLMock = await DBServer.getUri();
        const connectionMock = await MongoClient
          .connect(URLMock, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
  
        sinon.stub(MongoClient, 'connect')
          .resolves(connectionMock);
  
        const moviesCollection = await connectionMock.db('model_example').collection('movies');
  
        await moviesCollection.insertOne({
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        })
      });
  
      after(async () => {
        MongoClient.connect.restore();
        await DBServer.stop();
      });

      it('retorna um objeto', async() => {
        const [ item ] = await MoviesModel.getAll();
        const response = await MoviesModel.getById(item.id);

        expect(response).to.be.a('object');
      });

      it('o item possui as propriedades: "_id", "title", "releaseYear" e "directedBy"', async () => {
        const [ item ] = await MoviesModel.getAll();
        const response = await MoviesModel.getById(item.id);

        expect(response).to.include.all.keys('_id', 'title', 'releaseYear', 'directedBy');
      });
    });

    describe('quando o id não existe no BD', async() => {
      const DBServer = new MongoMemoryServer();
  
      before(async () => {
        const URLMock = await DBServer.getUri();
        const connectionMock = await MongoClient
          .connect(URLMock, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
  
        sinon.stub(MongoClient, 'connect')
          .resolves(connectionMock);
  
        const moviesCollection = await connectionMock.db('model_example').collection('movies');
  
        await moviesCollection.insertOne({
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        })
      });
  
      after(async () => {
        MongoClient.connect.restore();
        await DBServer.stop();
      });

      it('retorna "null"', async() => {
        // const [ item ] = await MoviesModel.getAll();
        const response = await MoviesModel.getById('6134ca021acbae57901c2f29');

        expect(response).to.be.equal(null);
      });
    });
  });

  describe('Insere um novo filme no BD', () => {
    const DBServer = new MongoMemoryServer();
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(async () => {
      const URLMock = await DBServer.getUri();

      const connectionMock = await MongoClient
        .connect(URLMock, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });

      sinon.stub(MongoClient, 'connect')
      .resolves(connectionMock);

    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    describe('quando é inserido com sucesso', () => {

      it('retorna um objeto', async () => {
        const response = await MoviesModel.create(payloadMovie);

        expect(response).to.be.a('object');
      });

      it('tal objeto possui o "id" do novo filme inserido', async () => {
        const response = await MoviesModel.create(payloadMovie);

        expect(response).to.have.a.property('id');
      });

    });
  });
});
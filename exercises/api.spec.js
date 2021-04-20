// Faça um teste que verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch , que faz a chamada à API , utilizando os seguintes dados:

// {
//   'id': '7h3oGtrOfxc',
//   'joke': 'Whiteboards ... are remarkable.',
//   'status': 200
// }

const api = require("./api");

const requestReturn = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
};

test("Testing requisition success on promise", async () => {
  api.fetchJoke = jest.fn().mockResolvedValue(requestReturn);

  expect(api.fetchJoke()).resolves.toEqual({
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  });
});
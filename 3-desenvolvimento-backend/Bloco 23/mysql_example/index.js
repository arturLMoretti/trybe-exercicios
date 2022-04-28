const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Books = require('./models/Books')

app.use(bodyParser.json());

app.get('/authors/:id', async (req, res) => {

  const { id } = req.params;

  const authorsById = await Author.byId(id);
  if (!authorsById) {
    return res.status(404).json({message: 'Id não existe'});
  }
  return res.status(200).json(authorsById);
});

app.get('/authors', async (req, res) => {
  console.log('tô aqui')
  const authors = await Author.getAll();
  if (!authors) {
    return res.status(404).json({message: 'Deu ruim!'});
  }
  return res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  console.log(first_name, middle_name, last_name);
  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.get('/books', async (req, res) => {
  const {id} = req.query;

  if (!id) {
    const books = await Books.getAll();
    if (!books) {
      return res.status(404).json({message: 'Deu ruim!'});
    }
    return res.status(200).json(books);
  }

  const booksByAuthorId = await Books.getByAuthorId(id);
  if (!booksByAuthorId) {
    return res.status(404).json({message: 'Deu ruim!'});
  }
  return res.status(200).json(booksByAuthorId);
});

app.get('/', (req, res) => {
  res.status(200).json({message: 'tudo fdf OK'})
})

app.listen(port, () => console.log("Example app listening on port!"));
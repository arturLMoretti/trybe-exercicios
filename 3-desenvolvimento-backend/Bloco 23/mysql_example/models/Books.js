const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
      'SELECT id, title , author_id FROM model_example.books;',
  );
  return books;
};

const getByAuthorId = async (authorId) => {
  console.log(authorId);
  const [booksFromAuthorId] = await connection.execute(
    `SELECT id, title, author_id FROM model_example.books WHERE author_id=${authorId}`);
  
  if (booksFromAuthorId.lenth === 0) return null;
    return booksFromAuthorId
}

module.exports = {getAll, getByAuthorId};
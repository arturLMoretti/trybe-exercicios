    // models/Author.js

    const connection = require('./connection');

    const fullName = ({id, firstName, middleName, lastName}) => ({
      id,
      firstName,
      middleName,
      lastName,
      fullName: [firstName, middleName, lastName].filter((name) => name).join(' '),
    })
    
    const serialize = (authorData) => ({
      id: authorData.id,
      firstName: authorData.first_name,
      middleName: authorData.middle_name,
      lastName: authorData.last_name,
  });

    // Busca todas as pessoas autoras do banco.

    const getAll = async () => {
        const [authors] = await connection.execute(
            'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
        );
        return authors.map(serialize).map(fullName);
    };

    const byId = async (authorId) => {
      const [authorsById] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id= ?;', [authorId],
    );
    if (authorsById.length === 0) return null;
    return authorsById.map(serialize).map(fullName);
    }

    const isValid = (firstName, middleName, lastName) => {
      if (!firstName || (typeof firstName !== 'string') ) return false;
      if (!middleName || (typeof middleName !== 'string') ) return false;
      if (!lastName || (typeof lastName !== 'string') ) return false;

      return true;
    };

    const create = async (firstName, middleName, lastName) => (
      connection.execute(
        'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (? ,?, ?)',
        [firstName, middleName, lastName]
      )
    )

    module.exports = {
        getAll,
        byId,
        isValid,
        create
    };
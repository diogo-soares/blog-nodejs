const postsControlador = require('./posts-controlador');
const { middlewaresAuthenticacao } = require('../usuarios')

module.exports = app => {
  app
    .route('/post')
    .get(postsControlador.lista)
    .post(
    middlewaresAuthenticacao.bearer,
    postsControlador.adiciona
    );
};

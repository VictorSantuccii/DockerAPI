const router = require('express').Router()
const usuarioController = require('../controller/usuarioController')

// Endpoints utilizados dentro dos métodos passados da controller

router.post('/', usuarioController.criarUsuario ); 
router.get('/', usuarioController.buscarTodosUsuarios);
router.get('/desc/', usuarioController.buscarTodosUsuariosPorIdadeDec);
router.get('/:id', usuarioController.buscarUsuarioPorId);

module.exports = router;

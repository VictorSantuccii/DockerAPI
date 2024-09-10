const router = require('express').Router()
const usuarioController = require('../controller/usuarioController')

router.post('/', usuarioController.criarUsuario ); 
router.get('/', usuarioController.buscarTodosUsuarios);
router.get('/desc/', usuarioController.buscarTodosUsuariosPorIdadeDec);
router.get('/:id', usuarioController.buscarUsuarioPorId);

module.exports = router;

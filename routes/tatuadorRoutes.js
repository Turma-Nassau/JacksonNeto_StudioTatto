const { Router } = require('express');
const router = Router();
const tatuadorControllers = require('../controllers/tatuadorControllers');

router.get('/user/:id', tatuadorControllers.vertatuadorPorUsuario);

router.get('/:id', tatuadorControllers.vertatuadorPorId);

router.get('/', tatuadorControllers.verTodastatuador);

router.post('/', tatuadorControllers.criartatuador);

router.patch('/:id', tatuadorControllers.atualizartatuador);

router.delete('/:id', tatuadorControllers.deletartatuador);

module.exports = router;
const { Router } = require('express');
const router = Router();
const tatuagemController = require('../controllers/tatuagemController');

router.get('/', tatuagemController.verTodastatuagems);

router.get('/:id', tatuagemController.vertatuagemPorId);

router.get('/user/:id', tatuagemController.vertatuagemsPorUsuario);

router.post('/', tatuagemController.criartatuagem);

router.patch('/:id', tatuagemController.atualizartatuagem);

router.delete('/:id', tatuagemController.deletartatuagem);

module.exports = router;
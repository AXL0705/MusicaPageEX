const express = require('express');
const router = express.Router();
const musicaController = require('../Controller/musica.controller');

//controlador

router.get('/', musicaController.getMusica);
router.post('/', musicaController.addMusica);
//router.put('/',);
router.delete('/:id', musicaController.deleteMusica); 

module.exports = router;
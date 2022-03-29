const req = require('express/lib/request');
const musicaModel = require('../models/musica.model');
const musicaController = {};

musicaController.getMusica = async (req, res) => {

  const musica = await musicaModel.find();
  res.json(musica);
};

musicaController.deleteMusica = async (req, res) => {
  await musicaModel.findByIdAndDelete(req.params.id);
  res.json({'status': 'Musica Eliminada!'})

}


musicaController.addMusica = async (req, res) => {
  const musica = new musicaModel(req.body);
  await musica.save();
  res.json({ status: 'Musica guardada' });
};

module.exports = musicaController;
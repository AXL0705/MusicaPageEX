const mongoose = require('mongoose');
const {Schema} = mongoose;
//para ver si sirve el pull request :D
const MusicaSchema = new Schema({
  nombre: {type: String, require: true},
  año: {type: Number, require: true},
  artista:{type: String, required: true},
  image:{type: String, required: true},
  urlVideo:{type: String, required: true},
  
});

module.exports = mongoose.model('Musica', MusicaSchema);
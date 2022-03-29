const mongoose = require('mongoose');
const URL = 'mongodb+srv://root:1234@music0.8ad1h.mongodb.net/test';

mongoose.connect(URL, {
  
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(db => console.log('Conexion exitosa'))
.catch(err => console.log('Error de conexion a la DB: ' + err));

module.exports = mongoose;


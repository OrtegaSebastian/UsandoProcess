const mongoose = require('mongoose');
let baseDeDatosConectada = false;
// const dotenv = require('dotenv')
// dotenv.config()
// mongoose.connect(process.env.mongoUrl);


function conectarDB(url, cb) {
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if(!err) {
    baseDeDatosConectada = true;
    }
    if(cb != null) {
    cb(err);
    }
});
}



module.exports = {
conectarDB
}
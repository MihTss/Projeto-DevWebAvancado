const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: Number,
    nome:  String,
    imagem: String,
    descricao:  String,
    preco:  String,
    categoria:{ type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
    animal:  String,
    comentarios: [{
         texto :  String ,
         nota :  Number 
    }]
})

module.exports = mongoose.model('products', userSchema)

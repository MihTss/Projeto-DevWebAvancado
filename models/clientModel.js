const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  id: Number,
  nomeCompleto: {
    type: String,
    require: true
},
  cpf: String,
  telefone: Number,
  endereco: String,
  cartaoCredito: String,
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
},
  senha: {
    type: String,
    required: true,
    select: false
}
})

module.exports = mongoose.model('clients', userSchema)

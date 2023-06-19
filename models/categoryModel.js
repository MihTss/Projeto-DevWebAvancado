const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  id: Number,
  nomeCategoria: String,
  descricao: String
})

module.exports = mongoose.model('categories', userSchema)
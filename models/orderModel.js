const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  id: Number,
  precoTotal: String,
  listaProdutos: [{
    "nome": String,
    "quantidade": Number
  }],
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'clients' },
  dateTime: { type: Date, default: Date.now },
  status: Boolean,
})

module.exports = mongoose.model('orders', userSchema)

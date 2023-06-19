const clientModel = require('../models/productModel')

class clientController {

  async cadastrarProduto(req, res) {
    let user = req.body
    const max = await clientModel.findOne({}).sort({ id: -1 })
    user.id = max == null ? 1 : max.id + 1
    const resultado = await clientModel.create(user)
    res.status(201).json(resultado)
  }

  async listarProduto(req, res) {
    const resultado = await clientModel.find({})
    res.status(200).json(resultado)
  }

  async buscarPorIdProduto(req, res) {
    const id = req.params.id
    const resultado = await clientModel.findOne({ 'id': id })
    res.status(200).json(resultado)
  }

  async atualizarProduto(req, res) {
    const id = req.params.id
    const _id = String((await clientModel.findOne({ 'id': id }))._id)
    await clientModel.findByIdAndUpdate(String(_id), req.body)
    res.status(200).send()
  }
}

module.exports = new clientController()

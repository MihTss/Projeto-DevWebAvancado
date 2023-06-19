const pedidoModel = require('../models/orderModel');
const clienteModel = require('../models/clientModel');

class PedidoController {
    async cadastrarPedidos(req, res) {
        const max = await pedidoModel.findOne({}).sort({ codigo: -1 });
        const pedido = req.body;
        pedido.codigo = max == null ? 1 : max.codigo + 1;

        const cliente = await clienteModel.findOne({ codigo: pedido.cliente.codigo });
        pedido.cliente = cliente._id;

        const resultado = await pedidoModel.create(pedido);
        res.status(201).json(resultado);
    }

    async listarPedidos(req, res) {
        const resultado = await pedidoModel.find({ 'id': req.params.pedidoId });
        res.status(200).json(resultado);
    }

    async buscarPedidoPorNome(req, res) {
        const cliente = req.params.nome
        const resultado = await clienteModel.findOne({ 'cliente': cliente })
        res.status(200).json(resultado)
    }

    async atualizarPedidos(req, res) {
        const id = req.params.id
        const _id = String((await clienteModel.findOne({ 'id': id }))._id)
        await clientModel.findByIdAndUpdate(String(_id), req.body)
        res.status(200).send()
      }
}

module.exports = new PedidoController();


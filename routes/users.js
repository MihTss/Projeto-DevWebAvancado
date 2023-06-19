const express             = require('express')
const router              = express.Router()
const clientController    = require('../controllers/clientController')
const categoriaController = require('../controllers/categoryController')
const productController   = require('../controllers/productController')
const pedidosController   = require('../controllers/orderController')

// Endpoints clientes
router.get('/listarCliente'         , clientController.listarCliente)
router.get('/idCliente/:id'         , clientController.buscarPorIdCliente)
router.post('/cadastrarCliente'     , clientController.cadastrarCliente)
router.put('/atualizarCliente/:id'  , clientController.atualizarCliente)
router.delete('/excluirCliente/:id' , clientController.excluirCliente)

//Endpoints Categoria
router.get('/listarCategoria'       , categoriaController.listarCategoria)
router.get('/idCategoria/:id'       , categoriaController.buscarPorIdCategoria)
router.post('/cadastrarCategoria'   , categoriaController.cadastrarCategoria)
router.put('/atualizarCategoria/:id', categoriaController.atualizarCategoria)

//Endopoints Produto
router.post('/cadastrarProduto'     , productController.cadastrarProduto)
router.get('/listarProduto'         , productController.listarProduto)
router.get('/idProduto/:id'         , productController.buscarPorIdProduto)
router.put('/atualizarProduto/:id'  , productController.atualizarProduto)

//Endopoints Pedidos
router.post('/cadastrarPedidos'     , pedidosController.cadastrarPedidos)
router.put('/atualizarPedidos/:id'      , pedidosController.atualizarPedidos)
router.get('/buscarPedidoPorNome/:cliente'   , pedidosController.buscarPedidoPorNome)
router.get('/listarPedidos'         , pedidosController.listarPedidos)

module.exports = router
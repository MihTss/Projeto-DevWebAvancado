require('./mongodb')
const usersModels = require('../models/orderModel')
const clients = require ('../models/clientModel')
const orders = require('./orders.json')

async function carregarDados() {
    await usersModels.deleteMany({});
    for (const order of orders) {
        await clients
            .findOne({ id: order.cliente })
            .then((cliente) => {
                order.cliente = cliente._id;
                return order;
            })
            .then(async (PedidoAlterado) => {
                await usersModels.create(PedidoAlterado);
            });
    }
    console.log("Carga de usuarios concluída!");
}
carregarDados()

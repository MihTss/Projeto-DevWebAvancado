require('./mongodb')
const usersModels = require('../models/clientModel')
const clientes = require('./client.json')

async function carregarDados() {
  try {
    await usersModels.deleteMany({})
    for (const user of clientes) {
      await usersModels.create(user)
    }
    console.log('Carga de clientes feita!')

    /* await userModel.deleteMany({});
        for (const user of users) {
            await planModel
                .findOne({ codigo: user.plano })
                .then((plano) => {
                    user.plano = plano._id;
                    return user;
                })
                .then(async (usuarioAlterado) => {
                    await userModel.create(usuarioAlterado);
                });
        }
        console.log("Carga de usuarios concluída!");
        */




  } catch (err) {
    console.log(err)
  } finally {
    process.exit()
  }
}
carregarDados()

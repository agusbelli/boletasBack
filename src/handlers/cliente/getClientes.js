import getClientesController from "../../controllers/cliente/getClientesController.js";

const getClientes = async(req,res)=>{
    try {
        const clientes = await getClientesController()
        res.status(200).send(clientes)
    } catch (error) {
        console.log(error);
        res.status(200).send(error)
    }
};

export default getClientes;
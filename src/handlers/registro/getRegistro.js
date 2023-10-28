import getRegistrosController from "../../controllers/registro/getRegistroController.js";

const getRegistros = async(req,res)=>{
    try {
        const registros = await getRegistrosController()
        res.status(200).send(registros)
    } catch (error) {
        console.log(error);
        res.status(200).send(error)
    }
};

export default getRegistros;
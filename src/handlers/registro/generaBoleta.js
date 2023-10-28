import generaBoletaController from "../../controllers/registro/generaBoletaController.js";

const generaBoleta = async(req,res)=>{
    const {cliente, desde, hasta} = req.query
    try {
        const registros = await generaBoletaController(cliente, desde, hasta);
        res.status(200).send(registros)
    } catch (error) {
        console.log(error);
        res.status(200).send(error)
    }
};

export default generaBoleta;
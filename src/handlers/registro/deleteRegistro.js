import deleteRegistroController from "../../controllers/registro/deleteRegistroController.js";

const deleteRegistro = async(req, res)=>{
    const {idRegistro} = req.query
    console.log("soy yo",idRegistro);
    try {
        await deleteRegistroController(idRegistro)
        res.status(200).send("eliminado ok")
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
};

export default deleteRegistro;
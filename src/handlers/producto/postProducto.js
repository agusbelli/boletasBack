import findOrCreateProducto from "../../controllers/producto/findOrCreatePRoducto.js";

const postProducto = async(req, res)=>{
    const {producto} = req.body
    try {
        const newProducto = await findOrCreateProducto(producto)
        res.status(200).send("producto cargado con exito")
    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo algun proplema")
    }
};

export default postProducto;
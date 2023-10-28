import getProductosController from "../../controllers/producto/getProductosController.js";

const getProductos = async(req,res)=>{
    try {
        const productos = await getProductosController()
        res.status(200).send(productos)
    } catch (error) {
        console.log(error);
        res.status(200).send(error)
    }
};

export default getProductos;
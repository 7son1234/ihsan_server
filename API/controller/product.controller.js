const PRODUCT_MODEL = require("../models/product.model");

const createNewproduct = (req, res) => {

    // res.status(200).json({ user: "test" });
    const { name, price, barcode, img } = req.body;

    PRODUCT_MODEL.create({
        name: name,
        price: price,
        barcode: barcode,
        img: img,
        id: barcode
    })
        .then((createRes) => {
            res.status(200).json({ product: createRes._doc });
        })
        .catch((e) =>
            res.status(500).json({ error: true, massage: e })
        );

};

const findprodact =async (req,res)=>{
    PRODUCT_MODEL.find().then((v)=>{
        res.status(200).json({ products: v });
    }).catch((e)=>{
        res.status(500).json({ error:e });
    })
}


module.exports = {
    createNewproduct,
    findprodact,
}
import uploadCloudinary from "../config/cloudinary.js"
import Product from "../model/productModel.js"

export const addProduct = async (req, res) => {
    try {
        let { name, description, price, category, subCategory, sizes, date, bestseller } = req.body
        let image1 = await uploadCloudinary(req.files.image1[0].path)
        let image2 = await uploadCloudinary(req.files.image2[0].path)
        let image3 = await uploadCloudinary(req.files.image3[0].path)
        let image4 = await uploadCloudinary(req.files.image4[0].path)

        let productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            date: Date.now(),
            bestseller: bestseller === "true" ? true : false,
            image1,
            image2,
            image3,
            image4
        }
        const product = await Product.create(productData)
        return res.status(201).json(product)

    }
    catch (error) {
        console.log("add product error")
        return res.status(500).json({ message: `add error ${error}` })
    }


}


export const listProduct = async (req, res) => {
    try {
        let product = await Product.find({});
        return res.status(200).json(product);
    }
    catch (error) {
        console.log("list product error")
        return res.status(500).json({ message: `add product ${error} ` })
    }
}

export const removeProduct = async (req, res) => {
    try {
        let { id } = req.params;
        const product = await Product.findByIdAndDelete(id)
        return res.status(200).json(product)
    }
    catch (error) {
        console.log("remove product error")
        return res.status(500).json({message:`remove product ${error}`})
    }
} 

import uploadCloudinary from "../config/cloudinary.js"
import Product from "../model/productModel.js"

export const addProduct = async (req, res) => {
    try {
        let { name, description, prise, category, subCategory, sizes, date, bestseller } = req.body
        let image1 = await uploadCloudinary(req.files.image1[0].path)
        let image2 = await uploadCloudinary(req.files.image2[0].path)
        let image3 = await uploadCloudinary(req.files.image3[0].path)
        let image4 = await uploadCloudinary(req.files.image4[0].path)

        let productData = {
            name,
            description,
            prise : Number(prise),
            category,
            subCategory,
            sizes:JSON.parse(sizes),
            date:Date.now(),
            bestseller:bestseller==="true" ?true:false,
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
        return res.status(500).json({message:`add error ${error}`})
    }


}
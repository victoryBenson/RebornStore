import Product from "../models/productModel.js";

//create product
export const createProduct =  async (req, res, next) => {
  try {
    const { name } = req.body;
    const duplicateProduct = await Product.findOne({name});

    if (duplicateProduct) {
      return res.status(409).json({ message: "Product already exists" });
    }

    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);

  } catch (error) {
    
    next(error);
  }
}

//get product
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({}).sort("-createdAt");
  
    res.status(200).json(products);
  } catch (error) {
    next(error)
  }
}

//getTotalProduct
export const getTotalProduct = async (req, res, next) => {
  try {
    
    const result = await Product.find({}).count();
  
    res.status(200).json(result);
  } catch (error) {
    next(error)
  }
}

//single product
export const singleProduct = async (req, res, next) => {
 try {
  
   const { id } = req.params;
   const product = await Product.findById(id);
 
   if (!product) {
     res.status(400).json({ message: "Product not found" });
   }
 
   res.status(200).json(product);

 } catch (error) {
    next(error)
 }
};

//delete product
export const deleteProduct = async (req, res, next) => {
  try {
    
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);

    if (!product) {
      res.status(404).json({ message: `Product not found` });
    }
  
    res
    .status(204)
    .json({ message: "Product deleted" })
    .send({message: "Product deleted"})

  } catch (error) {
    next(error)
  }
}

//update product
export const updateProduct = async (req, res, next) => {
  try {
    
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body);
  
    if (!product) {
      res.status(404).json({ message: `Product not found` }); 
    }

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);

 } catch (error) {
    next(error)
  }
}

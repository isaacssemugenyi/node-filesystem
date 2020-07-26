/**
 * Our model is Product imported as
 * const Product = require('../models/productRoutes')
 */
const fs = require('fs');
const Product = require('../models/productRoutes');


 //Here we have got the delete route

 app.delete('/product/:id/delete', async(req, res)=>{
     const query = req.params.id;
     try{
        await Product.findByIdAndDelete(query, (err, product)=>{
            if(err) console.log(err);
            
            fs.unlink(product.imagePath);
        })
      } catch(error){
        console.error(error);
     }
 })
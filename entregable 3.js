const express = require('express');
const ProductManager = require('./ ProductManager');

const app = express();
const port = 5000

const productManager = new ProductManager();

app.get('/products', async (req, res) => {
    try {
        let products = await
    productNanager.getAllproducts();
    const limit = req.query.limit;
    if (limit) {
        products = products.slice(0, parseInt(limit));

    }     
       res.json(products);
       
       res.status(500). json({error: 'error al obtener los productos'});
      

    }
});



app.get('/products/:pid', async (req, res) => {
    const productId = req.params.pid;
    try {
        const product = await 
        productManager.getProductById(productId);
              if (!product) {
                res.status(404).json({ error: 'producto no encontrado'});
              } else {
                res.json(product);
              }
    } catch (error) {
        res.status(500).json({error: 'error al obtener el producto'});
    }
});

app.listen(port, () => {
    console.log('servidor escuchando en http//localhost:${port}');
});
 const users = require('./routes/user.routes');
 const products = require('./routes/product.routes');
 const express = require('express');
 const app = express();

 app.use(express.json());
 
 

app.use('api/users/', users);
app.use('api/products/', products);

app.get('/', (req, res)=>{
   res.status(200).send("Server is running...")
})

const port = process.env.PORT || 3000;
 app.listen(port, ()=>console.log(`Listening on the port ${port}...`));
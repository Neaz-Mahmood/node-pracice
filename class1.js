// const products = [
//     {
//        "id":1,
//        "name": "Bata shoe"
//     }
//  ];

//  app.get('/', (req, res)=>{
//     res.send("The server is running");
//  });

//  app.get('/api/products', (req, res)=>{
//     res.send(products);
//  });

// app.get('/api/products/:id', (req, res)=>{
//    const id = req.params.id;

//    console.log(id);
//    res.send("ok");
// });

// app.put('/api/products/:id', (req, res)=>{
//    const id = req.params.id;
//    const product = products.find(product => product.id == id);

//    if(!product) return res.send("Product is not found");

//    product.name = req.body.name;
//    res.send(products);
// });

// app.delete('/api/products/:id', (req, res)=>{
//    const id = req.params.id;
//    const product = products.find(product => product.id == id);
//    if(!products) return res.send("Product is not found");

//    const index = products.indexOf(products);
//    products.splice(index, 1);
//    res.send("Product removed");
// });

// app.post("/api/products", (req, res)=>{
//    const newProduct = {
//       id: products.length+1,
//       name: req.body.name
//    }
//    products.push(newProduct);
//    res.send(newProduct);
// });


/*
    url: 
        get -> http://pondit.com/api/users
        response -> 
            [
                {
                    id: 1,
                    first_name: 'a',
                    last_name: 'b'
                },
                {
                    id: 2,
                    first_name: 'aa',
                    last_name: 'bb'
                }
            ]

        get -> http://pondit.com/api/users/1
        response ->
            {
                id: 1,
                first_name: 'a',
                last_name: 'b'
            }

        post -> http://pondit.com/api/users

            body -> 
                {
                    "first_name": "a",
                    "last_name": "b"
                }

            response -> 
                {
                    id: 3,
                    first_name: 'a',
                    last_name: 'b'
                }
        put -> http://pondit.com/api/users/1
            body -> 
                {
                    "first_name": "habib",
                    "last_name": "rahman"
                }  
            response ->
                {
                    id: 1,
                    first_name: "habib",
                    last_name: "rahman"
                }
        
        patch -> http://pondit.com/api/users/1
            body -> 
                {
                    "first_name": "habib",
                }  
            response ->
                {
                    id: 1,
                    first_name: "habib",
                    last_name: "rahman"
                }
            

        delete -> http://pondit.com/api/users/1
        response -> 
            {
                id: 1,
                first_name: 'habib',
                last_name: 'rahman'
            }
*/
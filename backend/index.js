import  express from "express";
import mysql from "mysql";
// import { getAllUser } from "./controllers/userController.js";
// import userRoute from "./routes/user.js"


// app.use('/api/v1',userRoute);




const app = express();
app.use(express.json())
// DB connection

 const connection = mysql.createConnection({
    host: "localhost",
  user: "root",
  password: "",
  database:"first"
});
   
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

// connection.query('CREATE DATABASE only',(err,result)=>{
//     if(err) throw err;
//     console.log("Done")
// })

// connection.query('DROP TABLE product')


//User route

app.get("/getAlluser",(req,res)=>{
    connection.query('SELECT * FROM user',(err,result)=>{
        if(!err) res.send(result);
        else console.log(err);
    })
})
app.get("/getAlluser/:id",(req,res)=>{
    connection.query('SELECT * FROM user WHERE id=?',[req.params.id],(err,result)=>{
        if(!err) res.send(result);
        else console.log(err);
    })
})

app.post("/createUser",async(req,res)=>{
    const {name , gmail , mobno } = req.body;
    const user = { name : name ,gmail:gmail ,mobno:mobno }
    
    connection.query(`INSERT INTO user SET ? `,user,(err,result)=>{
        if(!err) res.send(result);
        else
        console.log(err);
    })
    
})

app.put("/updateUser/:id",(req,res)=>{
    const id = req.params.id;
    const {name , gmail, mobno} = req.body;
    connection.query('UPDATE user SET name=?, gmail=? ,mobno=? WHERE id = ?' , [name,gmail,mobno,id],(err,result)=>{
        if(!err) res.send(result);
        else console.log(err);
    })
})
app.delete("/deleteUser/:id",(req,res)=>{
    const id = req.params.id;
    connection.query('DELETE FROM user WHERE id = ?',[id],(err,result)=>{
        if(!err) res.send(result);
        else console.log(err);
    })
})

// .........................

// Product Routes 

app.get("/getAllproduct",(req,res)=>{
    connection.query('SELECT * FROM product',(err,result)=>{
        if(!err) res.send(result);
        else console.log(err);
    })
})
app.get("/getAllproduct/:id",(req,res)=>{
    connection.query('SELECT * FROM product WHERE id=?',[req.params.id],(err,result)=>{
        if(!err) res.send(result);
        else console.log(err);
    })
})

app.post("/createProduct",async(req,res)=>{
    const {name , cost , img } = req.body;
    const product = { name : name ,cost:cost ,img:img }
    
    connection.query(`INSERT INTO product SET ? `,product,(err,result)=>{
        if(!err) res.send(result);
        else
        console.log(err);
    })
    
})

app.put("/updateProduct/:id",(req,res)=>{
    const id = req.params.id;
    const {name , cost, img} = req.body;
    connection.query('UPDATE product SET name=?, cost=? ,img=? WHERE id = ?' , [name,cost,img,id],(err,result)=>{
        if(!err) res.send(result);
        else console.log(err);
    })
})
app.delete("/deleteProduct/:id",(req,res)=>{
    const id = req.params.id;
    connection.query('DELETE FROM product WHERE id = ?',[id],(err,result)=>{
        if(!err) res.send(result);
        else console.log(err);
    })
})


  
// server
app.listen(3001,() => {
    console.log(`connected to backend http://localhost:3001` )
});

// export  connection;
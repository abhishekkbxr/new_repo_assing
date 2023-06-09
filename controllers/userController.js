// import express from "express";
// import mysql from "mysql"
// import connection from "../index";

// export const getAllUser = async(req,res) =>{
//     connection.query('SELECT * from first',(err,row)=>{
//         if(!err) res.send(row);
//         else console.log(err);
//     })
// }


// import conn from "../db/db.js";
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

import connection from "../index";

export const getAllUser = async(req,res)=>{
    connection.query('SELECT * from user',(err,row)=>{
                if(!err) res.send(row);
                else console.log(err);
            })
}
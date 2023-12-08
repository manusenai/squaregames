import express from "express";
import cors from "cors";

const usuario = "user";
const senha = "123";

const vl = express();
vl.use(express.json());
vl.use(cors());
vl.use(express.urlencoded({extended : true}));

vl.post("/login", (req, res) =>{

    const {user, pass} = req.body

    if(user != null && pass != null){

        if(user == usuario && pass == senha){
            console.log(user, pass);
    
            return res.status(200).json("ok")
        }

        else{
            return res.status(401).json("usuario ou senha incorretos")
        }
    }
    return res.status(401).json("os campos nao podem ser vazios")
})

vl.listen(3000, ()=>{

    console.log("Running!!!")
})
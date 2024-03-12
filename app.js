const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config({path:'./config.env'})
require('./db/conn')
const UserModel = require('./models/user')

const app=express()
app.use(cors())
app.use(express.json())

app.get('/', (req,res) =>{
    UserModel.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.get('/getuser/:id', (req,res) =>{
 const id = req.params.id;
  UserModel.findById({_id:id})
 .then(user =>res.json(user))
 .catch(err =>res.json(err))
})
app.put('/updateuser/:id', (req,res) =>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{name: req.body.name, email: req.body.email, age:req.body.age})
    .then(user =>res.json(user))
 .catch(err =>res.json(err))
})
app.post("/createuser",(req,res) =>{
    UserModel.create(req.body)
    .then (user => res.json(user))
    .catch(err => res.json(err))
})

app.delete('/deleteuser/:id',(req,res)=>{
    const id=req.params.id
    UserModel.findByIdAndDelete({_id:id}).then(user=>res.json(user)).catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log('server is running')
})

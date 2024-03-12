const mongoose=require('mongoose')
const DB=process.env.DATABASE
console.log(DB);

mongoose.set('strictQuery',false)

mongoose.connect(DB).then(()=>{
    console.log('database connection successful')
})
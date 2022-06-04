const dotenv=require('dotenv').config();
const express=require('express');
const app=express();

// environment configaration
const PORT=process.env.SERVER_PORT;
// console.log(PORT)

app.use(express.json());
app.use(express.urlencoded({extended:false}));
//students routes
app.use('/api/students',require('./routes/students'));

//route listerner
app.listen(PORT,()=>{
    console.log(`Our server port running on ${PORT}`);
});
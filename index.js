const express= require('express')
const cookieParser= require('cookie-parser')
require('dotenv').config()
const  app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}));
const SignupRoute=require('./Router/Signup')
app.use(cookieParser())

app.use('/api',SignupRoute)
app.get('/', (req,res)=>{

    res.send('tryinng prisma')
})

app.listen(3200, ()=>{

    console.log("its working");
    
})
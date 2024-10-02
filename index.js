const express= require('express')

const  app = express();

app.get('/', (req,res)=>{

    res.send('tryinng prisma')
})

app.listen(3200, ()=>{

    console.log("its working");
    
})
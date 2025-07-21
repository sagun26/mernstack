require('dotenv').config();
const express =require('express');
const ConnectToDatabase = require('./database/database.js');
const Book = require('./model/bookModel.js');
const app = express();
app.use(express.json());

 
// app.listen(portnumber,callback)  
//  "portnumber":unknown word
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"success"
    })
})
app.post("/books",async (req,res)=>{
    // const bookPrice= req.body.bookPrice;
    // const bookName= req.body.bookName;
   const{bookPrice,bookName}=req.body;
   console.log(bookName,bookPrice)
   res.status(201).json({message:bookName,bookPrice});
    Book.create({
        bookName,
        bookPrice
    })
    });

    app.listen(process.env.PORT || 3000, async () => {
        await ConnectToDatabase();
        console.log(`Node.js server is running on port ${process.env.PORT || 3000}`);
    });

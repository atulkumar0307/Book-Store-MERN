import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

const app = express()
dotenv.config();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 3001;
const MongoDBURI = process.env.MongoDBURI;
// connect to MongoDB
try{
    mongoose.connect(MongoDBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to Mongodb")
}catch(err){
    console.log("error: "+ err)
}

// defining routes
app.use("/book", bookRoute);

app.use("/user", userRoute);

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`);
})
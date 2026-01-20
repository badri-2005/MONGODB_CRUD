import mongoose from 'mongoose';

const connection = mongoose.connect('mongodb+srv://Badri:Badri@finquest.pp84x.mongodb.net/express-crud')
.then(()=>{
    console.log("Connected to MongoDB successfully");
})
.catch((err)=>{
    console.log(err.message);
    
})

export default connection;
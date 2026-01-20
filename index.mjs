import express from 'express'
import connection from './DB/db.mjs';
import {User} from './Schemas/user.mjs';

const app = express();
// app.use(connection);
app.use(express.json());

const PORT = 3000

// Health Route
app.get('/',(req,res)=>{
    res.status(200).send({msg:"Health Route"});
})


// Get All Users
app.get('/api/users',async(req,res)=>{
    try{
        const users = await User.find()
        if(users.length>0)
        {
            return res.status(200).send(users);
        }
        return res.status(200).send({msg:"No Users Found"})
    }
    catch(err)
    {
        console.log(err.message);
        res.status(400).send({msg:"Error in Fetching Data"})
        
    }
})


// Get User By ID
app.get('/api/users/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user)
        {
            return res.status(200).send({msg:"No User Found"});
        }
        return res.status(200).send(user);
    }
    catch(err)
    {
        console.log(err.message);
        return res.status(404).send({msg:"Error While Fetching"});
        
    }
})


// Post User
app.post('/api/users',async(req,res)=>{
    const body = req.body;
    console.log(body);
    
    const newUser = new User(body);
    
    try{
        const savedUser = await newUser.save();
        return res.status(201).send(savedUser);
    }
    catch(err)
    {
        console.log(err.message);
        return res.send(400).send({msg:"Not Stored in DB"})
    }
})


// Update User
app.put('/api/users/:id',async(req,res)=>{
    try{
        const {id} = req.params;

        const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true})

        if(!updateUser)
        {
            return res.status(401).send({msg:"User Not Found"})
        }

        return res.status(201).send(updateUser);
    }
    catch(err)
    {
        console.log(err.message);
        res.status(400).send({msg:err.message})
    }
})


// Delete User
app.delete('/api/users/:id' , async(req,res)=>{
    try{
        const {id} = req.params;

        const deleteUser= await User.findByIdAndDelete(id);

        if(!deleteUser)
        {
            return res.status(200).send({msg:"User Not Found"})

        }
        return res.status(200).send({msg:"Deleted Successfully"},deleteUser)
    }
    catch(err)
    {
        res.status(404).send(err.message);
        console.log(err.message);
        
    }
})

// Server Connectivity
app.listen(PORT,()=>{
    console.log('Server Running in PORT - ' + PORT);
})
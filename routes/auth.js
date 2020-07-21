const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");

router.get('/',(req,res) => {
    res.send("hello");
})

router.post('/signup', (req,res) => {
    const { name, email, password } = req.body;
    if(!email || !password || !name){
        return res.status(400).json({error:"pls add all the ffields"})
    }
    User.findOne({email:email}).
    then((savedUser)=>{
        if(savedUser) {
            return res.status(400).json({error:"user already exists with that email"})
        }
        const user = new User({
            email,
            password,
            name
        })

        user.save()
        .then(user => {
            res.json({message: "saved successfully"})
        })
        .catch(err => {
            cosnsole.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
    
})

module.exports = router
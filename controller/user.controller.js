const { validateUserRegistration, validateUserUpdate } = require("../validation/user.validate");
const { User } = require('../models/dbmodel');


const getUsers = async (req, res)=>{
    try{
        const users = await user.findAll();

        res.status(200).send(users);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal server error!");
    }
}


const getUser = async (req, res)=>{
    try{
        const { id } = req.params;

        const user = await User.findOne({
            where: {
                id
            }
        })

        if(!user) return res.send(404).send("User not found!");
        
        res.status(200).send(user);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal server error!");
    }
}

const postUser = async (req, res) => {
    const { username, email, password, confirm_password } = req.body;

    try {
        const err = await validateUserRegistration({
            username,
            email,
            phone,
            password,
            confirm_password,
        });

        if (err) return res.status(400).send(err);

        const existUser = await User.findOne({
            where: {
                email
            }
        })

        if(existUser) return res.status(400).send("Already registered with the email.")

        const user = await User.create({
            username,
            email,
            password
        }); 
        
        res.status(201).send(user);
    } 
    catch (err) {
        console.log(err);
        res.status(500).send('Internal server error.');
    }
};

const putUser = async (req, res)=>{
    try{
        const { id } = req.params;
        const { username, email} = req.body;

        const err = validateUserUpdate({username, email});

        if (err) return res.status(400).send(err);

        const user = await User.update({
            username, 
            email
        },{
            where: {
                id
            }
        });
        
        if(!user) return res.send(404).send("User not found!");

        res.status(200).send("Successfully updated")
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Internal server error.');
    }
}

const patchUser = async (req, res)=>{
    try{
        const { id } = req.params;
        const { username, email} = req.body;

        const err = validateUserUpdate({username, email});

        if (err) return res.status(400).send(err);

        const user = await User.findOne({
            where: {
                id
            }
        });
        if(!user) return res.send(404).send("User not found!");

        if(username) user.update({ username });
        if(email) user.update({ email });

        res.status(200).send("Successfully updated")
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Internal server error.');
    }
}

const deleteUser = async (req, res)=>{
    try{
        const { id } = req.params;

        const user = await User.findOne({
            where: {
                id
            }
        });

        if(!user) return res.send(404).send("User not found!");

        await user.destroy()

        res.status(200).send(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Internal server error.');
    }
}

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.postUser = postUser;
module.exports.putUser = putUser;
module.exports.patchUser = patchUser;
module.exports.deleteUser = deleteUser;
const { User } = require('../models/dbmodel');


const getAllUsers = async (req, res)=>{
    try{
        const users = await User.findAll();

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

const createUser = async (req, res) => {
    const { username, email, password, confirm_password } = req.body;

    try {
         const existUser = await User.findOne({
            where: {
                email
            }
        });

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

const updateUser = async (req, res)=>{
    try{
        const { id } = req.params;
        const { username, email} = req.body;

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

module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.patchUser = patchUser;
module.exports.deleteUser = deleteUser;
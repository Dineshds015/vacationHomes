const User = require("../models/user-model");
const bcrypt = require("bcrypt")

const home = async(req, res) =>{
    try {
        res.status(200).send("Welcome Hitesh ... By Router.");
    } catch (error) {
        console.log(error);
    }
};

const register = async(req, res) =>{
    try {
        // console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if(userExist){
            return res.status(400).json({ message: "Email already exists" });
        }
        const userCreated = await User.create({ username, email, phone, password });

        res.status(200).json({ msg: "Registration Successful", token: await userCreated.generateToken(), userId: userCreated._id.toString(), });
    } catch (error) {
        // res.status(500).json({message: "Internal server error"});
        nexr(error);
    }
};


const login = async(req, res) =>{
    try {
        // console.log(userExist);
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        

        if(!userExist){
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const user = await userExist.comparePassword(password);
        // const user = await bcrypt.compare(password, userExist.password);

        if(user){
            res.status(200).json({ message: "Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString(), });
        } else{
            res.status(401).json({ message: "Invalid Email or Password" });
        }

    } catch (error) {
        // res.status(500).json({message: "Internal server error"});
        console.error(error);  
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

const user = async(req, res) =>{
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log(`Error from the user route ${error}`);
    }
}

module.exports = { home, register, login, user };
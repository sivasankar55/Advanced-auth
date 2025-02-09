import {User} from "../model/user.model.js";

export const signup= async (req,res) => {
  const {email, password, name} = req.body;

  try {
    if(email || password || neme){
        throw new Error("All fields are required");
    }
    const userAlreadyExits = await User.findOne({email})
    if(userAlreadyExits){
        return res.status(400).json({success:false,message:"User already exits"});
    }
  } catch (error) {
    res.status(400).json({success:false, message:error.message});
  }
};

export const login = async (req,res) => {
    res.send ("login")
}

export const logout = async (req,res) => {
    res.send("logout")
}
import mongoose, { Schema } from "mongoose"
import { User } from "../entities/User"

const userSchema = new Schema<User>({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:String,
        require:true
    }
},
{
    timestamps:true
})

export default mongoose.model<User>("User",userSchema);
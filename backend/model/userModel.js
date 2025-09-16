import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    cartDate: {
        type: Object,
        default: {}
    },
},
    {
        timestamps: true,
        minimize: true,
    });

const user = mongoose.model("user", userSchema);

export default user
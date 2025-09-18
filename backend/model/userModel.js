import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true   // fixed typo: require -> required
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {          
        type: String,
        required: false
    },
    cartDate: {
        type: Object,
        default: {}
    },
}, {
    timestamps: true,
    minimize: true,
});

const User = mongoose.model("User", userSchema);
export default User;

import mongoose from "mongoose";
const storeschema = new mongoose.Schema({
    sid:{
        type: Number,
        required: true
    },
    sname:{
        required: true,
        type: String
    },
    simage:{
        required: true,
        type: String
    },
    desc:{
        required: true,
        type: String
    },
    category:{
        required: true,
        type: String
    }
})

const Store = mongoose.model('Store', storeschema)

export default Store
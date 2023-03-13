import mongoose from "mongoose";
const productschema = new mongoose.Schema({
    store:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Store'
    },
    id:{
        type: Number,
    },
    title:{
        required: true,
        type: String
    },
    code:{
        required: true,
        type: String
    },
    slug:{
        required: true,
        type: String
    },
    viewed:{
        required: true,
        type: Number,
        defaultValue: 1458
    },
    code_status:{
        required: true,
        type: String
    },
})

const Product = mongoose.model('Product', productschema)

export default Product
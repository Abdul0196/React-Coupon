import express from "express";
import Product from "../models/productmodel.js";

const router = express.Router()

router.get('/',async(req,res)=>{
    try {
        const data = await Product.find({}).populate('store')
        res.json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.get('/getone/:id', async(req, res) => {
    try {
        const data = await Product.findById(req.params.id).populate('store')
        res.json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.post('/post',async(req,res)=>{
    const data = new Product({
        id:req.body.id,
        title:req.body.title,
        code:req.body.code,
        store:req.body.store,
        slug:req.body.slug,
        viewed:req.body.viewed,
        code_status: req.body.code_status,
    })
    try {
        const saveData = await data.save();
        res.status(200).json(saveData)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
router.put('/update/:id',async(req,res)=>{
    try {
        const data = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try {
        const data = await Product.findByIdAndDelete(req.params.id)
        res.json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

export default router
import express from "express"
import Store from "../models/storemodel.js"

const router = express.Router()

router.get('/', async(req,res)=>{
    try {
        const data = await Store.find({})
        res.json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/getone/:name', async(req,res)=>{
    console.log(req.params.name)
    try {
        const data = await Store.findOne({sname: req.params.name})
        res.json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/savestore',async(req,res)=>{
    const data = new Store({
        sid: req.body.sid,
        sname: req.body.sname,
        simage: req.body.simage,
        desc: req.body.desc,
        category: req.body.category,
    })
    try {
        const saveData = await data.save()
        res.json(saveData)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/updatestore/:id',async(req,res)=>{
    try {
        const data = await Store.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/deletestore/:id',async(req,res)=>{
    try {
        const data = await Store.findByIdAndDelete(req.params.id)
        res.json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router


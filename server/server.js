import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from "cors"
import productroute from './routes/productroute.js'
import storeroute from './routes/storeroute.js'

dotenv.config()

connectDB()

const app = express()
app.use(cors())
app.use(express.json());

app.use('/api/products', productroute)
app.use('/api/stores', storeroute)

app.get('/', (req,res) => {
    res.send('API is running')
})


app.listen(5000, console.log('Server Running'))
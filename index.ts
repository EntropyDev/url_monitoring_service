import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json({ limit: "30mb" }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())


// Routes
app.get('/', (req, res) => {
    res.status(201).json({msg: "Get /"})
})

// Connect to DB
const PORT = process.env.PORT || 5000
const db_url = process.env.MONGO_URI || ''
mongoose.connect(db_url).then(() => {
    // Start Server
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
}).catch(
    (error) => console.log(`${error} did not connect`)
)
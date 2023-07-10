import express from 'express'

const app = express()


app.use(express.json())
app.get('/', (req, res) => {
    res.status(201).json({msg: "Get /"})
})

app.listen(5000, () => {
    console.log("Listening at 5000")
})
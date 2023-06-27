import express from "express"

const PORT = 3000;

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('sever npm start work very good!')
})
 
app.listen(PORT, () => console.log('Server started on PORT ' + PORT))

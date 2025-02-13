console.log("hello world")
import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./db/connectDB";

dotenv.config()
const app = express()
app.use(cors())
const user = {
    id: 1,
    name: "Great Buba",
    email: "buba.ebralidze18@gmail.com"
}

app.get("/api/user", (req, res) => {
    try {
        const user = mongoose.Model("users", new mongoose.)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error })
    }
 })

app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`Server is chilling process.env.PORT http://localhost:${process.env.PORT}`)
})


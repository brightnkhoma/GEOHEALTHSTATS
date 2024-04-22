import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';

const app = express();
app.use(cors())
app.use(express.json())

await mongoose.connect('mongodb+srv://allan:allan@geohealthstats.ovuh04d.mongodb.net/?retryWrites=true&w=majority&appName=GEOHEALTHSTATS').then(()=>console.log("Mongo DB connected"))

const PORT = process.env.PORT || 4000

app.listen(PORT,(()=>console.log(`server listening on port ${PORT}`)))
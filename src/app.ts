import express from "express";
const app = express();
app.use(express.json())
import 'reflect-metadata' // dependency injection için projemize dahil ediyoruz

app.listen(3000,()=>{
    console.log("listening on port 3000")
})
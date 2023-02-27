import mongoose from "mongoose";

mongoose.connect("mongodb+srv://henry:123@alura.igdgiag.mongodb.net/alura-node?")
let db = mongoose.connection

export default db
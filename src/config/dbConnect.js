import mongoose from "mongoose";

mongoose.connect("mongodb+srv://<username>:<password>@<address>.pvneprk.mongodb.net/?retryWrites=true&w=majority")
let db = mongoose.connection

export default db

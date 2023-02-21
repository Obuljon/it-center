import mongoose from "mongoose";
export default function db() {
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://localhost/it-center', {useNewUrlParser: true, useUnifiedTopology: true});
}
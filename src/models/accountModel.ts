import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
const Schema = mongoose.Schema;

const accountProfile = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

accountProfile.plugin(mongoosePaginate);

export default mongoose.model('accountProfile', accountProfile);
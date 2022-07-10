import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
const Schema = mongoose.Schema;

const villagersModels = new Schema({
    "id": { type: Number },
		"file-name": { type: String },
		"name": {
			"name-USen": { type: String },
			"name-EUen": { type: String },
			"name-EUde": { type: String },
			"name-EUes": { type: String },
			"name-USes": { type: String },
			"name-EUfr": { type: String },
			"name-USfr": { type: String },
			"name-EUit": { type: String },
			"name-EUnl": { type: String },
			"name-CNzh": { type: String },
			"name-TWzh": { type: String },
			"name-JPja": { type: String },
			"name-KRko": { type: String },
			"name-EUru": { type: String },
		},
		"personality": { type: String },
		"birthday-string": { type: String },
		"birthday":{ type: String },
		"species": { type: String },
		"gender": { type: String },
		"subtype": { type: String },
		"hobby": { type: String },
		"catch-phrase": { type: String },
		"icon_uri": { type: String },
		"image_uri": { type: String },
		"bubble-color": { type: String },
		"text-color": { type: String },
		"saying": { type: String },
		"catch-translations": {
			"catch-USen": { type: String },
			"catch-EUen": { type: String },
			"catch-EUde": { type: String },
			"catch-EUes": { type: String },
			"catch-USes": { type: String },
			"catch-EUfr": { type: String },
			"catch-USfr": { type: String },
			"catch-EUit": { type: String },
			"catch-EUnl": { type: String },
			"catch-CNzh": { type: String },
			"catch-TWzh": { type: String },
			"catch-JPja": { type: String },
			"catch-KRko": { type: String },
			"catch-EUru": { type: String },
		},
	"votes": {type: Number}
})

villagersModels.plugin(mongoosePaginate);

export default mongoose.model('villagers', villagersModels);
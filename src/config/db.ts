import mongoose from 'mongoose';
import 'dotenv/config'
mongoose.Promise = global.Promise

const Mongoose = mongoose.connect(process.env.MONGODB_URL, {
})
.then(() => {
    console.log('Conectado com sucesso')
})
.catch((err) => {
    console.log(err)
})

export default Mongoose

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio."
mongoose.Error.messages.Number.min = "O '{VALUE}' informador e menor que o limite de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informador e maior que o limite de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não e valido para o atributo '{PATH}'."
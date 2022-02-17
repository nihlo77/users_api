const mongoose = require(`mongoose`)
const { Schema } = mongoose

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        lastname: { type: String, required: true },
        userName: { type: String, required: true },
        password: {type: String,required:true,default:`0000`},
        phoneNumber: {type: Number,required:true},
        address: {type:String,required:false,default:`Addreess not registered`},
        photo: { type: String, required: false, default: `photo not available` },
        preferences: { type: Array, required: false, default: false }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model(`User`, userSchema)
import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    isPhoneVerified: Boolean,
    phoneVerificationCode: Number,
}, {
   timestamps: true
})

export const User = models.User || model("User", userSchema);


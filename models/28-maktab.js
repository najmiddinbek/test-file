import mongoose, { Schema } from "mongoose";

const maktabSchema = new Schema(
    {
        shaxs: String,
        maktab: Number,
        sinf: String,
        YangiTelefonRaqamiUser: String,
        adress: String,
    },
    {
        timestamps: true,
    }
);

const Maktab28 = mongoose.models.Maktab28 || mongoose.model("Maktab28", maktabSchema);

export default Maktab28;

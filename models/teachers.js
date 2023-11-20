import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema(
    {
        teacherFIO: String,
        teacherPassword: String,
        teacherClass: String,
    },
    {
        timestamps: true,
    }
);

const Teacher = mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);

export default Teacher;

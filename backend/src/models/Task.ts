import mongoose, { Schema, type Document } from "mongoose";

export interface ITask extends Document
{
    title: String;
    completed: boolean;

}

const TaskSchema: Schema = new Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, default: false}
});

export default mongoose.model<ITask>('Task', TaskSchema);
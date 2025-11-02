import mongoose, { Schema } from "mongoose";
const TaskSchema = new Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
});
export default mongoose.model('Task', TaskSchema);
//# sourceMappingURL=Task.js.map
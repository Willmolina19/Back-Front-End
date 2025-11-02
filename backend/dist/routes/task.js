import { Router } from "express";
import Task, {} from "../models/Task.js";
const taskRouter = Router();
taskRouter.get('/', async (req, res) => {
    const task = await Task.find();
    res.json(task);
});
taskRouter.post('/', async (req, res) => {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.json(savedTask);
});
// Actualizar una tarea
taskRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTask);
});
// Eliminar una tarea
taskRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Tarea eliminada' });
});
export default taskRouter;
//# sourceMappingURL=task.js.map
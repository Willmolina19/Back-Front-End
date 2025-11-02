import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import taskRouter from './routes/task.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mi-user:123456789@mongodb:27017/todo-app?authSource=admin&retryWrites=true&w=majority')

//ruta
app.use('/task', taskRouter)

export default app;


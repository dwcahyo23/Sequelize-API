import express from 'express';
import cors from 'cors';
import UserRouter from './router/UserRouter.js';

const port = 5005;
const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(UserRouter);

app.listen(port, () => console.log(`Server up & running in port : ${port}`));

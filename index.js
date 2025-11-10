import express from 'express';
import UsuarioRouter from './src/routes/usuario.routes.js';

const app = express();

app.use(express.json());
app.use(UsuarioRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
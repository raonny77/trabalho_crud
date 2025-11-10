import usuarioService from "../services/usuario.service.js";

async function createUsuarioController(req, res) {
    const novoUsuario = req.body;
    try{
        const usuario = await usuarioService.createUsuarioService(novoUsuario);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).send(error.message );
    }
}

export default {
    createUsuarioController
}
import usuarioRepository from "../repositories/usuario.repository.js";


async function createUsuarioService(novoUsuario) {
    const usuario = await usuarioRepository.createUsuarioRepository(novoUsuario);
    return usuario;
}

export default {
    createUsuarioService
}


import usuarioRepository from "../repositories/usuario.repository.js";


async function createUsuarioService(novoUsuario) {
    const foundUsuario = await usuarioRepository.createUsuarioRepository(novoUsuario.email)
    if (foundUsuario) 
        throw new Error('Usuário já existe com esse email');
        const usuario = await usuarioRepository.createUsuarioRepository(novoUsuario);
    return usuario;
}

export default {
    createUsuarioService
}


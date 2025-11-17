import usuarioRepository from "../repositories/usuario.repository.js";

async function createUsuarioService(novoUsuario) {
    const usuario = await usuarioRepository.createUsuarioRepository(novoUsuario);
    
    if (!usuario) {
        throw new Error("Erro ao criar usuario");
    }

    return usuario;
}

async function findAllUsuarioService() {
    const usuarios = await usuarioRepository.findAllUsuarioRepository();
    return usuarios;
}

async function findUsuarioByIdService(id) {
    const usuario = await usuarioRepository.findUsuarioByIdRepository(id);
    
    if (!usuario) {
        throw new Error("Usuario não encontrado");
    }
    
    return usuario;
}

async function updateUsuarioService(novoUsuario, id) {
    const usuario = await UsuarioRepository.findUsuarioByIdRepository(id);
    
    if (!usuario) {
        throw new Error("Usuario não encontrado");
    }
    
    const usuarioAtualizado = await usuarioRepository.updateUsuarioRepository(id, novoUsuario);

    return usuarioAtualizado;
}

async function deleteUsuarioService(id) {
    const usuario = await usuarioRepository.findUsuarioByIdRepository(id);

    if (!usuario) {
        throw new Error("Usuario não encontrado");
    }

    const mensagemRetorno = await usuarioRepository.deleteUsuarioRepository(id);

    return mensagemRetorno;

}

export default {
    createUsuarioService,
    findAllUsuarioService,
    findUsuarioByIdService,
    updateUsuarioService,
    deleteUsuarioService
}

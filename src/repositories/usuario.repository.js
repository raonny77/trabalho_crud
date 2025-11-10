import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    foto TEXT
    )
`);

function createUsuarioRepository(novoUsuario) {
    return new Promise((resolve, reject) => {

        const { login, email, senha, foto } = novoUsuario;

        db.run(
            `INSERT INTO usuarios (login, email, senha, foto) VALUES (?, ?, ?, ?)`,
            [login, email, senha, foto],
            function (err) {
                if (err) {
                    return reject(err);
                }
                resolve({ id: this.lastID, ...novoUsuario });
            }
        );
    });
}

export default {
    createUsuarioRepository
};


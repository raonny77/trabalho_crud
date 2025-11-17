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
            `INSERT INTO usuarios (login, email, senha, foto) 
            VALUES (?, ?, ?, ?)`,
            [login, email, senha, foto],
            function (err) {
                if (err) {
                    return reject(err);
                }
                // resolve with the created record id and original data
                resolve({ id: this.lastID, ...novoUsuario, message: 'Usuário criado com sucesso!' });
            }
        );
    });
}

function findUsuarioByEmail(email) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT id, login, email, senha, foto 
            FROM usuarios 
            WHERE email = ?`,
            [email],
            (err, row) => {
                if (err) {
                    return reject(err);
                }
                resolve(row);
            }
        );
    });
}

export default {
    createUsuarioRepository,
    findUsuarioByEmail
}
;
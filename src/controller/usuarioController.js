const db = require('../database');

class UsuarioController {
  constructor() {}

  static criarUsuario(req, res) {
    const { email, senha, idade } = req.body;

    // Verificando se todos os campos estão preenchidos

    if (!email || !senha || !idade) {
      return res.status(400).json({ error: 'Preencha todos os campos corretamente.' });
    }

    db.query(
      'INSERT INTO usuarios (email, senha, idade) VALUES (?, ?, ?)',
      [email, senha, idade],
      (error, results) => {
        if (error) {
          return res.status(400).json({ error: 'Erro ao criar usuário: ' + error.message });
        }
        res.status(201).json({ message: 'Usuário criado com sucesso!' });
      }
    );

    /* Ou

     const query = 'INSERT INTO usuarios (senha, email, idade) VALUES ( 
        '${senha}',
        '${email}',
        '${idade}'
     )';

     */

  }

  static buscarTodosUsuarios(req, res) {
    db.query('SELECT * FROM usuarios', (error, results) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao buscar usuários: ' + error.message });
      }
      res.status(200).json(results);
    });
  }

  // Método para buscar todos os usuários por idade decrescente, com DESC

  static buscarTodosUsuariosPorIdadeDec(req, res) {
    db.query('SELECT * FROM usuarios ORDER BY idade desc', (error, results) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao buscar usuários: ' + error.message });
      }
      res.status(200).json(results);
    });
  }

  static buscarUsuarioPorId(req, res) {
    const id = req.params.id;

    db.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao buscar usuário: ' + error.message });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      res.status(200).json(results[0]);
    });
  }

}

module.exports = UsuarioController;
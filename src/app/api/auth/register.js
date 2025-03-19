import bcrypt from 'bcryptjs';
import db from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (_err, results) => {
      if (results.length > 0) {
        return res.status(400).json({ message: 'Usuário já existe' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err) => {
        if (err) return res.status(500).json({ message: 'Erro ao cadastrar usuário' });
        return res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
      });
    });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}

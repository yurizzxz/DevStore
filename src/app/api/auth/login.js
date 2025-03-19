import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (_err, results) => {
      if (results.length === 0) {
        return res.status(400).json({ message: 'Usuário não encontrado' });
      }

      const isMatch = await bcrypt.compare(password, results[0].password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Senha incorreta' });
      }

      const token = jwt.sign(
        { id: results[0].id, name: results[0].name, email: results[0].email },
        'sua_chave_secreta', 
        { expiresIn: '1h' }
      );

      res.status(200).json({ token });
    });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}

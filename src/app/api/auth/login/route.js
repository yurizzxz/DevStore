import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getConnection } from "@/lib/db";

export async function POST(req) {
  try {
    const { name, email, password, type, telefone, cpf, rua, cidade, estado, cep } = await req.json();
    const connection = await getConnection();

    if (type === "register") {
      const [results] = await connection.execute("SELECT * FROM users WHERE email = ?", [email]);

      if (results.length > 0) {
        connection.release();
        return new Response(JSON.stringify({ message: "Usuário já existe" }), { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await connection.execute(
        "INSERT INTO users (name, email, password, telefone, cpf, rua, cidade, estado, cep) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [name, email, hashedPassword, telefone, cpf, rua, cidade, estado, cep]
      );

      connection.release();

      return new Response(JSON.stringify({ message: "Usuário cadastrado com sucesso" }), { status: 201 });
    }

    if (type === "login") {
      const [results] = await connection.execute("SELECT * FROM users WHERE email = ?", [email]);

      connection.release();

      if (results.length === 0) {
        return new Response(JSON.stringify({ message: "Usuário não encontrado" }), { status: 400 });
      }

      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return new Response(JSON.stringify({ message: "Senha incorreta" }), { status: 400 });
      }

      const token = jwt.sign(
        { id: user.id, name: user.name, email: user.email, cep: user.cep, telefone: user.telefone, cidade: user.cidade, estado: user.estado, rua: user.rua },
        process.env.JWT_SECRET || "123456",
        { expiresIn: "1h" }
      );

      return new Response(JSON.stringify({ token }), { status: 200 });
    }

    return new Response(JSON.stringify({ message: "Tipo inválido" }), { status: 400 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Erro no servidor" }), { status: 500 });
  }
}

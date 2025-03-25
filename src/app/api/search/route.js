import { getConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url); 
  const term = searchParams.get('term'); 

  if (!term) {
    return NextResponse.json({ error: 'Digite o campo de pesquisa' }, { status: 400 });
  }

  let connection;
  try {
    connection = await getConnection();
    const [results] = await connection.query('SELECT * FROM produto WHERE nome LIKE ?', [`%${term}%`]);

    return NextResponse.json(results);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}

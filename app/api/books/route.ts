import books from '@/app/api/db';
// export async function get() {
//   return Response.json({ message: 'Hello from backend' });
// }

export async function GET() {
  return Response.json(books);
}

export async function POST(request: Request) {
  const book = await request.json();
  books.push(book);

  return Response.json(books);
}

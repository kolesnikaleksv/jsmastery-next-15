async function Page() {
  const response = await fetch('http://localhost:3000/api/books');
  const books = await response.json();

  return (
    // const {} = books;
    <>
      <h1>Books page</h1>
      <ul>
        {books.map((book: { id: string; title: string }) => (
          <p key={book.id}>
            Book id: {book.id}. Book title {book.title}
          </p>
        ))}
      </ul>
    </>
  );
}

export default Page;

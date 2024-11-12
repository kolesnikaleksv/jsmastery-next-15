async function NextFetchingPage() {
  const responce = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!responce.ok) throw new Error('Responce not ok');
  const users = await responce.json();

  return (
    <>
      <h2>Better way to fetch data in Next.js</h2>
      <div>
        {users.map((user: { id: string; title: string }) => (
          <p key={user.id}>
            User id: {user.id} title {user.title}
          </p>
        ))}
      </div>
    </>
  );
}

export default NextFetchingPage;

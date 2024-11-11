const User = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>User details {id}</div>;
};

export default User;

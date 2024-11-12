'use client';
import { useEffect, useState } from 'react';

const Analytics = () => {
  const [users, setUsers] = useState([]);
  // my solutio
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((data) => data.json())
  //     .then((res) => setUsers(res));
  // }, []);
  //jsmastery's solution    but in both cases we have to make them like 'use client' component !!!!!!!!!!!!
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responce = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        const data = await responce.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <>
      <h2>Analytics page inside the dashboard page</h2>
      <div>
        {users.map((user: { id: string; title: string }) => (
          <p key={user.id}>
            User id: {user.id} title {user.title}
          </p>
        ))}
      </div>
    </>
  );
};

export default Analytics;

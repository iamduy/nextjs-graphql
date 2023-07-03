'use client';
import { endPoint } from '@/utils';
import useSWR from 'swr';

export default function UsersPage() {
  const { data, isLoading, error } = useSWR(endPoint.GET_USERS);
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>failed to load</div>;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>
        {data.map((v: any) => {
          return (
            <tr key={v.id}>
              <td>{v.name}</td>
              <td>{v.email}</td>
              <td>{v.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

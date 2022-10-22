import { useQuery } from '@apollo/client';

import ClientRow from './ClientRow';
import { GET_CLIENTS } from '../queries/queries';
import Spinner from './spinner';

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  console.log(JSON.stringify(data));
  if (loading) return <Spinner />;
  if (error) return <p>Something went Wrong</p>;
  return (
    <>
      <h1 className="text-">Employess&apos; Data</h1>
      {data && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.clients?.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

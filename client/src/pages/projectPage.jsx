import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import Spinner from '../components/spinner';
import { GET_PROJECT } from '../queries/projectQueries';
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton';
import EditClientProjectForm from '../components/EditClientProjectForm';

const ProjectPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <h1>{data.project.description}</h1>
          <h1 className="mt-3">{data.project.status}</h1>
          <p className="load">{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <EditClientProjectForm project={data.project} />
          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
};

export default ProjectPage;

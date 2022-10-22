import React from 'react';
import Addclientmodel from '../components/Addclientmodel';
import AddProjectModel from '../components/AddProjectModel';
import Clients from '../components/Clients';
import Project from '../components/Project';

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <Addclientmodel />
        <AddProjectModel />
      </div>
      <Project />
      <hr />
      <Clients />
    </>
  );
}

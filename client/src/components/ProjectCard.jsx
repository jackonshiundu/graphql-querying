import React from 'react';
import Project from './Project';

export default function ProjectCard({ project }) {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{Project.name}</h5>
            <a href={`/projects/${project.id}`} className="btn btn-light">
              View
            </a>
          </div>
          <p className="small">
            Status:<strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

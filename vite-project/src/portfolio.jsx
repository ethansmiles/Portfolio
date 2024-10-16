import React from 'react';
import Project from './Project';

function Portfolio() {
  return (
    <section>
      <h1>Portfolio</h1>
      <div className="projects">
        <Project title="Project 1" appLink="#" repoLink="#" />
        <Project title="Project 2" appLink="#" repoLink="#" />
        <Project title="Project 3" appLink="#" repoLink="#" />
        <Project title="Project 4" appLink="#" repoLink="#" />
        <Project title="Project 5" appLink="#" repoLink="#" />
        <Project title="Project 6" appLink="#" repoLink="#" />
      </div>
    </section>
  );
}

export default Portfolio;
import { useState, useEffect } from 'react';
import { RepositoryItem } from './repositoryItem';
import '../styles/repositories.scss';

//https://api.github.com/orgs/enspiral-dev-academy/repos

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/tavareshenrique/ignite-reactjs',
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);


  return (
    <section className="repository-list">
      <h1>List of repositories</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}

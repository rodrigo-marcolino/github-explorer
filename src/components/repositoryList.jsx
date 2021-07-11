import { useState, useEffect } from 'react';
import { RepositoryItem } from './repositoryItem';
import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/enspiral-dev-academy/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  return (
    <section className="repository-list">
      <h1>List of repositories</h1>
      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.id} repository={repository} />;
        })}
      </ul>
    </section>
  );
}

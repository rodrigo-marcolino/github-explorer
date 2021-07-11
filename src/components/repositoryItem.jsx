export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Dafault'}</strong>
      <p>{props.repository.description}</p>
      <p>Last Update: {props.repository.updated_at}</p>
      <a href={props.repository.html_url}>Acessar repositorio</a>
    </li>
  );
}

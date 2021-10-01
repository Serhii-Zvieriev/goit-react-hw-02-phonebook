import style from './List.module.scss';

function List({ contacts }) {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}

export default List;

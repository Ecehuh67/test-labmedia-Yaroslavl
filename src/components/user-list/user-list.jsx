import { AppContext } from '../../context/context';
import ListItem from '../list-item/list-item';

const UserList = () => {
  const { setUsers, users } = React.useContext(AppContext);
  return (
    <ul className="main__users-list users-list">
      <li
        className="users-list__item users-list__item--head"
        key={Math.random() * users.length}
      >
        <span className="users-list__item-name">Username</span>
        <span className="users-list__item-email">E-mail</span>
        <span className="users-list__item-date">Registration date</span>
        <span className="users-list__item-rating">Rating </span>
        <span className="users-list__item-button users-list__item-button--head">
          Delete user
        </span>
      </li>
      {users.slice(0, 5).map((user) => (
        <ListItem user={user} key={user.id} />
      ))}
    </ul>
  );
};

export default UserList;

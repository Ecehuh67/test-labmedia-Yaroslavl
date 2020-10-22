import { AppContext } from '../../context/context';
import ListItem from '../list-item/list-item';
import ShowMoreButton from '../show-more-button/show-more-button';

const UserList = () => {
  const { setUsers, filteredUsers, shownUsers } = React.useContext(AppContext);

  return (
    <ul className="main__users-list users-list">
      <li
        className="users-list__item users-list__item--head"
        key={Math.random() * filteredUsers.length}
      >
        <span className="users-list__item-name users-list__item-name--head">
          Username
        </span>
        <span className="users-list__item-email">E-mail</span>
        <span className="users-list__item-date">Registration date</span>
        <span className="users-list__item-rating">Rating </span>
        <span className="users-list__item-button users-list__item-button--head">
          Delete user
        </span>
      </li>
      {filteredUsers.slice(0, shownUsers).map((user) => (
        <ListItem user={user} key={Math.random() * user.id} />
      ))}

      {shownUsers < filteredUsers.length && <ShowMoreButton />}
    </ul>
  );
};

export default UserList;

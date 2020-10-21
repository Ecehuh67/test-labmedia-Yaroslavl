import { covertDateFormat } from '../../consts';
import { AppContext } from '../../context/context';

const ListItem = ({ user }, key) => {
  const { deleteUser, users } = React.useContext(AppContext);
  const date = covertDateFormat(user.registration_date);

  return (
    <li className="users-list__item" key={key}>
      <span className="users-list__item-name">{user.username}</span>
      <span className="users-list__item-email">{user.email}</span>
      <span className="users-list__item-date">
        {date.day}.{date.month}.{date.year}
      </span>
      <span className="users-list__item-rating">{user.rating}</span>
      <button
        className="users-list__item-button"
        type="button"
        onClick={() => {
          deleteUser(user);
        }}>
        &times;
      </button>
    </li>
  );
};

export default ListItem;

import { AppContext } from '../../context/context';
import { SHOWN_USERS } from '../../consts';

const ShowMoreButton = () => {
  const { setShown, filteredUsers } = React.useContext(AppContext);

  return (
    <li className="users-list__item">
      <button
        className="users-list__item--show-more"
        onClick={() => {
          setShown((prev) => {
            if (prev + SHOWN_USERS > filteredUsers.length) {
              return filteredUsers.length;
            }

            return prev + SHOWN_USERS;
          });
        }}
      >
        Show more
      </button>
    </li>
  );
};

export default ShowMoreButton;

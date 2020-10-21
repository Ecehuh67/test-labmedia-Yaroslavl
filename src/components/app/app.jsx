import '../../less/style.less';
import { AppContext } from '../../context/context';
import { URL } from '../../consts';
import UserList from '../user-list/user-list';
import Sorting from '../sorting/sorting';

const App = () => {
  const {
    setUsers,
    users,
    setFilteredUsers,
    sortByIncrease,
    filteredUsers,
    setDateFilter,
    resetSortBy,
    dateFiler,
    rateFiler,
    fieldFilter,
    setFieldFilter,
  } = React.useContext(AppContext);

  const isResetActive = !!(
    dateFiler.isActive ||
    rateFiler.isActive ||
    fieldFilter.isActive
  );

  React.useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        setFilteredUsers(users);
      });
  }, []);

  React.useEffect(() => {
    console.log(filteredUsers);
  }, [filteredUsers]);

  console.log(fieldFilter);

  const [inputValue, setInputValue] = React.useState('');

  return (
    <main className="html-wrapper">
      <h1 className="main__caption">Users list</h1>
      <div className="main__filters-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={({ target }) => {
            const { value } = target;
            const sortedByName = users
              .slice()
              .filter((el, i) =>
                el.username.toLowerCase().includes(value.toLowerCase())
              );
            const sortedByEmail = users
              .slice()
              .filter((el, i) =>
                el.email.toLowerCase().includes(value.toLowerCase())
              );
            setInputValue(value);

            setFieldFilter({ isActive: true });

            setFilteredUsers(() => {
              if (!value) {
                setFieldFilter({ isActive: false });
                setInputValue('');
                return users;
              } else {
                return sortedByName.concat(sortedByEmail);
              }
            });
          }}
        />
        <button
          type="button"
          disabled={!isResetActive}
          onClick={() => {
            resetSortBy();
            setInputValue('');
          }}>
          Reset filters
        </button>
      </div>
      <Sorting />

      <UserList />
    </main>
  );
};

export default App;

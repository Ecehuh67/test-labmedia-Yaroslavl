import '../../less/style.less';
import UserList from '../user-list/user-list';
import Sorting from '../sorting/sorting';
import Filters from '../filters/filters';
import { AppContext } from '../../context/context';
import { URL } from '../../consts';

const App = () => {
  const {
    setUsers,
    users,
    setFilteredUsers,
    shownUsers,
    filteredUsers,
  } = React.useContext(AppContext);

  React.useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        setFilteredUsers(users);
      });
  }, []);

  React.useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <main className="html-wrapper">
      <h1 className="main__caption">Users list</h1>

      <Filters />
      <Sorting />

      <UserList />
    </main>
  );
};

export default App;

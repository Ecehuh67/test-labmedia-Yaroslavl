import '../../less/style.less';
import { AppContext } from '../../context/context';
import { URL } from '../../consts';
import UserList from '../user-list/user-list';

const App = () => {
  const { setUsers, users } = React.useContext(AppContext);

  React.useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  console.log(users);

  return (
    <main className="html-wrapper">
      <h1 className="main__caption">Users list</h1>
      <div className="main__filters-wrapper">
        <input type="text" />
        <button type="button">Reset filters</button>
      </div>
      <div className="main__sorting-wrapper">
        <button type="button">Registration date</button>
        <button type="button">Rating</button>
      </div>

      <UserList />
    </main>
  );
};

export default App;

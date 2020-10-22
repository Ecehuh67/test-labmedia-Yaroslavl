import { SortTypes, SHOWN_USERS } from '../consts';
const AppContext = React.createContext(null);

const ChatProvider = (props) => {
  const [users, setUsers] = React.useState([]);
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  const [shownUsers, setShown] = React.useState(SHOWN_USERS);

  const initialFilterValue = {
    isActive: false,
    value: false,
  };

  const [fieldFilter, setFieldFilter] = React.useState(initialFilterValue);
  const [dateFiler, setDateFilter] = React.useState(initialFilterValue);

  const [rateFiler, setRateFilter] = React.useState(initialFilterValue);

  const deleteUser = (user) => {
    const userIndex = users.indexOf(user);

    setUsers(() => {
      const copiedUsers = users.slice();
      copiedUsers.splice(userIndex, 1);
      return copiedUsers;
    });
  };

  const sortBy = (str) => {
    switch (true) {
      case str === SortTypes.DATE:
        setFilteredUsers(() => {
          if (dateFiler.value) {
            return filteredUsers
              .slice()
              .sort(
                (a, b) =>
                  new Date(a.registration_date) - new Date(b.registration_date)
              );
          } else {
            return filteredUsers
              .slice()
              .sort(
                (a, b) =>
                  new Date(b.registration_date) - new Date(a.registration_date)
              );
          }
        });
        setRateFilter(initialFilterValue);
        break;
      case str === SortTypes.RATE:
        setFilteredUsers(() => {
          if (rateFiler.value) {
            return filteredUsers
              .slice()
              .sort((a, b) => new Date(a.rating) - new Date(b.rating));
          } else {
            return filteredUsers
              .slice()
              .sort((a, b) => new Date(b.rating) - new Date(a.rating));
          }
        });
        setDateFilter(initialFilterValue);
    }
  };

  const resetSortBy = () => {
    setRateFilter(initialFilterValue);
    setDateFilter(initialFilterValue);
    setFilteredUsers(users);
  };

  const sampleAppContext = {
    users,
    setUsers,
    filteredUsers,
    setFilteredUsers,
    deleteUser,
    sortBy,
    setDateFilter,
    setRateFilter,
    dateFiler,
    rateFiler,
    resetSortBy,
    setFieldFilter,
    fieldFilter,
    shownUsers,
    setShown,
  };

  return (
    <AppContext.Provider value={sampleAppContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ChatProvider;
export { AppContext };

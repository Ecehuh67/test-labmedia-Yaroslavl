import { SortTypes, SHOWN_USERS } from '../consts';
const AppContext = React.createContext(null);

const ChatProvider = (props) => {
  // origin array from the API
  const [users, setUsers] = React.useState([]);
  // Copied array which will be used in the App
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  // using for pagination of ammount of users
  const [shownUsers, setShown] = React.useState(SHOWN_USERS);

  const initialFilterValue = {
    isActive: false,
    value: false,
  };

  // Set of filters which is used on the page
  const [fieldFilter, setFieldFilter] = React.useState(initialFilterValue);
  const [dateFiler, setDateFilter] = React.useState(initialFilterValue);
  const [rateFiler, setRateFilter] = React.useState(initialFilterValue);

  const deleteUser = (user) => {
    // console.log(shownUsers === filteredUsers.length);
    // if (shownUsers === filteredUsers.length) {
    //   setShown((prev) => prev - 1);
    //   console.log(shownUsers);
    // }

    setUsers(() => {
      const userIndex = users.indexOf(user);
      const copiedUsers = users.slice();
      copiedUsers.splice(userIndex, 1);
      return copiedUsers;
    });

    setFilteredUsers(() => {
      const userIndex = filteredUsers.indexOf(user);
      const copiedUsers = filteredUsers.slice();
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
    setFieldFilter(initialFilterValue);
    setFilteredUsers(users);
  };

  const sampleAppContext = {
    users,
    filteredUsers,
    dateFiler,
    rateFiler,
    fieldFilter,
    shownUsers,
    setUsers,
    setFilteredUsers,
    deleteUser,
    sortBy,
    setDateFilter,
    setRateFilter,
    resetSortBy,
    setFieldFilter,
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

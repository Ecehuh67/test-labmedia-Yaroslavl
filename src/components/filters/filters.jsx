import { AppContext } from '../../context/context';

const Filters = () => {
  const {
    users,
    setFilteredUsers,
    resetSortBy,
    dateFiler,
    rateFiler,
    fieldFilter,
    setFieldFilter,
    shownUsers,
  } = React.useContext(AppContext);

  // Control the input
  const [inputValue, setInputValue] = React.useState('');

  // Define when a reset button will be availiable
  const isResetActive = !!(
    dateFiler.isActive ||
    rateFiler.isActive ||
    fieldFilter.isActive
  );

  return (
    <div className="main__filters-wrapper">
      <div className="main__filters-search-wrapper">
        <svg className="main__filters-search-icon" width="32" height="32">
          <use xlinkHref="#search-icon" />
        </svg>
        <input
          className="main__filters-input"
          type="text"
          placeholder="Serching by name or email"
          value={inputValue}
          onChange={({ target }) => {
            const { value } = target;

            // Get filtered users according to a value of input
            const sortedByName = users
              .slice()
              .filter((el, i) =>
                el.username.toLowerCase().includes(value.toLowerCase())
              )
              .slice(0, shownUsers);
            const sortedByEmail = users
              .slice()
              .filter((el, i) =>
                el.email.toLowerCase().includes(value.toLowerCase())
              )
              .slice(0, shownUsers);

            // Set input value
            setInputValue(value);

            setFieldFilter({ isActive: true });

            setFilteredUsers(() => {
              // return original users array
              if (!value) {
                setFieldFilter({ isActive: false });
                return users;
              } else {
                // combine filtered arrays
                return sortedByName.concat(sortedByEmail);
              }
            });
          }}
        />
      </div>
      <button
        className={`main__filters-button ${
          isResetActive ? 'main__filters-button--active' : ''
        }`}
        type="button"
        disabled={!isResetActive}
        onClick={() => {
          resetSortBy();
          setInputValue('');
        }}
      >
        <svg
          className={`main__filters-icon ${
            isResetActive ? 'main__filters-icon--active' : ''
          }`}
          width="24"
          height="24"
        >
          <use xlinkHref="#clear-icon" />
        </svg>
        Reset filters
      </button>
    </div>
  );
};

export default Filters;

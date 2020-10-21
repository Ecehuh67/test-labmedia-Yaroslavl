import { SortTypes } from '../../consts';
import { AppContext } from '../../context/context';

const Sorting = () => {
  const {
    setUsers,
    users,
    setFilteredUsers,
    sortBy,
    filteredUsers,
    setDateFilter,
    dateFiler,
    setRateFilter,
    rateFiler,
  } = React.useContext(AppContext);

  return (
    <div className="main__sorting-wrapper">
      <button
        type="button"
        onClick={() => {
          setDateFilter((prev) => {
            return {
              ...prev,
              isActive: true,
              value: !prev.value,
            };
          });
          sortBy(SortTypes.DATE);
        }}>
        Registration date
      </button>
      <button
        type="button"
        onClick={() => {
          setRateFilter((prev) => {
            return {
              ...prev,
              isActive: true,
              value: !prev.value,
            };
          });
          sortBy(SortTypes.RATE);
        }}>
        Rating
      </button>
    </div>
  );
};

export default Sorting;

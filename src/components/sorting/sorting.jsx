import { SortTypes } from '../../consts';
import { AppContext } from '../../context/context';

const Sorting = () => {
  const {
    sortBy,
    setDateFilter,
    dateFiler,
    setRateFilter,
    rateFiler,
  } = React.useContext(AppContext);

  return (
    <div className="main__sorting-wrapper">
      <h2 className="main__sorting-caption">Sorting:</h2>
      <button
        className={`main__sorting-button ${
          dateFiler.isActive ? 'main__sorting-button--active' : ''
        }`}
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
        }}
      >
        Registration date
      </button>
      <button
        className={`main__sorting-button ${
          rateFiler.isActive ? 'main__sorting-button--active' : ''
        }`}
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
        }}
      >
        Rating
      </button>
    </div>
  );
};

export default Sorting;

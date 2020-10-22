import { AppContext } from '../../context/context';

const Warning = ({ setWarning, warning }) => {
  const { deleteUser } = React.useContext(AppContext);

  return (
    <section className="main__warning-wrapper">
      <div className="main__warning-container">
        <p className="main__warning-caption">
          Are you sure you want to delete {warning.user.username}?
        </p>
        <div className="main__warning-button-wrapper">
          <button
            className="main__warning-button main__warning-button--ok"
            type="button"
            onClick={() => {
              deleteUser(warning.user);
              setWarning({ isShown: false, user: {} });
            }}>
            Ok
          </button>
          <button
            className="main__warning-button main__warning-button--cancel"
            type="button"
            onClick={() => {
              setWarning({ isShown: false, user: {} });
            }}>
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Warning;

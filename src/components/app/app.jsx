import '../../less/style.less';
import { AppContext } from '../../context/context';

const App = () => {
  const { isAuth } = React.useContext(AppContext);

  return <p>Hello</p>;
};

export default App;

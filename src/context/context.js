const AppContext = React.createContext(null);

const ChatProvider = (props) => {
  const [users, setUsers] = React.useState([]);

  const sampleAppContext = {
    users,
    setUsers,
  };

  return (
    <AppContext.Provider value={sampleAppContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ChatProvider;
export { AppContext };

import App from './components/app/app';
import ChatProvider from './context/context';

ReactDOM.render(
    <ChatProvider>
        <App />
    </ChatProvider>,
  document.querySelector('#root')
);
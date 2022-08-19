import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import myStore from './store/store-index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={myStore}>
        <App />
    </Provider>
);

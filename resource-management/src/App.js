import Header from '../src/components/Header'
import Loader from './components/Loader';
import { useSelector } from 'react-redux';
import TabContent from './components/TabContent';
import FailureView from './components/FailureView';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';

function App() {
  const { dataFetchStatus, loggedIn } = useSelector(({ adminReducer }) => adminReducer)

  return (
    <div className="App">
      {loggedIn && <Header />}
      {dataFetchStatus !== 'Fail' && loggedIn && <TabContent />}
      {dataFetchStatus === 'Loading' && loggedIn && <Loader />}
      {dataFetchStatus === 'Fail' && loggedIn && <FailureView />}
      {!loggedIn && <Login />}
      <ToastContainer />
    </div>
  );
}

export default App;

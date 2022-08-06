import Header from '../src/components/Header'
import Loader from './components/Loader';
import { useSelector } from 'react-redux';
import TabContent from './components/TabContent';
import FailureView from './components/FailureView';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  const { dataFetchStatus } = useSelector(({ adminReducer }) => adminReducer)

  return (
    <div className="App">
      <Header onClick={() => toast.success("Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      })} />
      {dataFetchStatus !== 'Fail' ? <TabContent /> : <FailureView />}
      {dataFetchStatus === 'Loading' && <Loader />}
      <ToastContainer />
    </div>
  );
}

export default App;

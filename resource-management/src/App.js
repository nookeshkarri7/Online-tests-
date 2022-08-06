import Header from '../src/components/Header'
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import TabContent from './components/TabContent';
import FailureView from './components/FailureView';
function App() {
  const { dataFetchStatus } = useSelector(({ adminReducer }) => adminReducer)

  return (
    <div className="App">
      <Header />
      {dataFetchStatus !== 'Fail' ? <TabContent /> : <FailureView />}
      {dataFetchStatus === 'Loading' && <Loader />}
    </div>
  );
}

export default App;

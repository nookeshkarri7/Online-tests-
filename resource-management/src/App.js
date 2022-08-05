import Header from '../src/components/Header'
import TabMenu from '../src/components/TabMenu'
import TabContent from './components/TabContent';
function App() {
  return (
    <div className="App">
      <Header />
      <TabMenu />

      <TabContent />
    </div>
  );
}

export default App;

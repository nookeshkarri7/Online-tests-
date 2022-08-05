import Header from '../src/components/Header'
import TabMenu from '../src/components/TabMenu'
import SearchBar from '../src/components/SearchBar'

function App() {
  return (
    <div className="App">
      <Header />
      <TabMenu />
      <SearchBar placeholder='Search' type='resourceSearch' />
    </div>
  );
}

export default App;

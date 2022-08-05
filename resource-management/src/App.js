import Header from '../src/components/Header'
import TabMenu from '../src/components/TabMenu'
import SearchBar from '../src/components/SearchBar'
import Item from '../src/components/Item'
function App() {
  return (
    <div className="App">
      <Header />
      <TabMenu />
      <SearchBar placeholder='Search' type='resourceSearch' />
      <Item />
    </div>
  );
}

export default App;

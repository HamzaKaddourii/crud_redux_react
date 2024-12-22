import './App.css';
import ListStagiaire from './listStagiaire';
import { ADD_STG, store } from './reducestagaire';

function App() {
  // const dispatch = usedispatch : kadir hadi f line 9 kathyd store 
  return (
    <div className="App">
      <ListStagiaire></ListStagiaire>
    </div>
  );
}

export default App;

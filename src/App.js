import Input from './Components/Input';
import {AppContext} from './Components/Context'
import TodosList from './Components/TodosList';

function App() {
  return (
    <AppContext>
      <Input/>
      <TodosList/>
    </AppContext>
  );
}

export default App;

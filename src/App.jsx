import { useState, createContext } from 'react';
import Container from './components/Container';

export const TodoContext = createContext();

function App() {

  const [todoData, setTodoData] = useState([]);

  return (
    <div className="w-full h-screen bg-primary flex flex-row justify-center items-center">
      <TodoContext.Provider value={[todoData, setTodoData]}>
        <Container/>
      </TodoContext.Provider>
    </div>
  )
}

export default App;

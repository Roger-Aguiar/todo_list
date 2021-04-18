import './App.css';
import './components/layout/Navbar';
import Navbar from './components/layout/Navbar';
import TaskList from './components/list/TaskList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <TaskList></TaskList>
    </div>
  );
}

export default App;

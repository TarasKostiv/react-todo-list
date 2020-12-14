import './styles/App.css'
import ToDoList from './components/ToDoList'

function App() {
    return (
        <div className="App">
            <h1 className={'header'}> 📜 ToDo list ✏️</h1>
            <ToDoList/>
        </div>
    );
}

export default App;

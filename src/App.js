import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
	return (
		<div className="App">
			<h1>REDUX PRACTICE</h1>
			<CounterContainer />
			<hr />
			<TodosContainer />
		</div>
	);
}

export default App;

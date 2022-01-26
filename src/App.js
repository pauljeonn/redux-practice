import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';

function App() {
	return (
		<div className="App">
			<h1>REDUX PRACTICE</h1>
			<Counter number={0} />
			<hr />
			<Todos />
		</div>
	);
}

export default App;

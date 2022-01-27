import './App.css';
import CounterContainer from './containers/CounterContainer';
import Todos from './components/Todos';

function App() {
	return (
		<div className="App">
			<h1>REDUX PRACTICE</h1>
			<CounterContainer number={0} />
			<hr />
			<Todos />
		</div>
	);
}

export default App;

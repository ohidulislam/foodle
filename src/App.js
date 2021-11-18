import ContextProvider from "./store/ContextProvider";
import Header from "./Layout/Header/Header";
import Meals from "./Components/Meals/Meals";
import "./App.scss";

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<Header />
				<Meals />
			</div>
		</ContextProvider>
	);
}

export default App;

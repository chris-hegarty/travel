import Menu from "./components/Menu";
import Home from "./components/Home";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import "./App.css";

function App() {
	return (
		<Router>
			<Menu />
			<Routes>
				<Route path="/home" element={<Home />}></Route>
			</Routes>
		</Router>
		// <>
		// 	<div>
		// 		<h1>This is the App.</h1>
		// 	</div>
		// </>
	);
}

export default App;

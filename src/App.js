import Menu from "./components/Menu";
import Home from "./components/Home";
import TravelJobs from "./components/TravelJobs";
import Benefits from "./components/Benefits";
import About from "./components/About";
import BlogListPage from "./components/BlogListPage";
import Footer from "./components/Footer";
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
				<Route path="/traveljobs" element={<TravelJobs />}></Route>
				<Route path="/benefits" element={<Benefits />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/blogpage" element={<BlogListPage />}></Route>
				<Route path="*" element={<Navigate to="/home" />} />
			</Routes>
			<Footer />
		</Router>
		// <>
		// 	<div>
		// 		<h1>This is the App.</h1>
		// 	</div>
		// </>
	);
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./ErrorBoundary";
import "./fonts/FagoCo-Black.otf";
import "./fonts/OpenSans-Bold.ttf";
import "./fonts/OpenSans-Light.ttf";
import "./fonts/OpenSans-Regular.ttf";
import "./fonts/OpenSans-Semibold.ttf";
import { BlogProvider } from "./context/BlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ErrorBoundary>
		<BlogProvider>
			<App />
		</BlogProvider>
	</ErrorBoundary>,
);

// The entire app now is atahced to the props of the blog provider component.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

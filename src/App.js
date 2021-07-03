import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import {selectUser} from "./features/userSlice"

function App() {

	 

	return (
		<div className="app">
			{/* header */}
			<Header />
			<div className="app__body">
				{/* sidebar */}
				<Sidebar />

				{/* feed  */}
				<Feed />
				<Widgets />

				{/* widgets */}
			</div>

			
		</div>
	);
}

export default App;

// 1.57.50

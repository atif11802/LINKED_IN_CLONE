import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt=""
				/>
				<Avatar className="sidebar__avatar" />
				<h2>atif</h2>
				<h4>atifaslam81lc2gmail.com</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>who viewed you</p>
					<p className="sidebar__sideNumber">
						2,343
					</p>
				</div>
				<div className="sidebar__stat">
					<p>views as post</p>
					<p className="sidebar__sideNumber">
						2,332
					</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem("Reactjs")}
				{recentItem("Programming")}
				{recentItem("Software Engineer")}
				{recentItem("Designer")}
				{recentItem("Developer")}
				
			</div>
		</div>
	);
};

export default Sidebar;

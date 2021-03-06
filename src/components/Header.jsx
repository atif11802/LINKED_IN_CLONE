import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://image.flaticon.com/icons/png/512/174/174857.png"
					alt="linkedin_Icon"
				/>
				<div className="header__search">
					{/* searchicon */}
					<SearchIcon />
					<input placeholder="Search" type="text" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOptions Icon={HomeIcon} title="Home" />
				<HeaderOptions
					Icon={SupervisorAccountIcon}
					title="My Network"
				/>

				<HeaderOptions
					Icon={BusinessCenterIcon}
					title="Jobs"
				/>
				<HeaderOptions
					Icon={ChatIcon}
					title="Messaging"
				/>
				<HeaderOptions
					Icon={NotificationsIcon}
					title="Notifications"
				/>
				<HeaderOptions
					avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKAH49J4jbQ0p6QpEQWiH5mb09EgOv43eMA&usqp=CAU"
				title="me"
				/>

			</div>
		</div>
	);
};

export default Header;

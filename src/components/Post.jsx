import React from "react";
import "../styles/Post.css";
import {Avatar } from "@material-ui/core";
import InputOptions from "../components/InputOptions";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = ({ name, description, message, photoUrl }) => {
	return (
		<div className="post">
			<div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOptions 
                Icon={ThumbUpAltOutlinedIcon}
                title = "Like"
                color="gray"
                />
                <InputOptions 
                Icon={ChatOutlinedIcon}
                title = "Content"
                color="gray"
                />
                <InputOptions 
                Icon={ShareOutlinedIcon}
                title = "Share"
                color="gray"
                />
                <InputOptions 
                Icon={SendOutlinedIcon}
                title = "Send"
                color="gray"
                />
            </div>
		</div>
	);
};

export default Post;

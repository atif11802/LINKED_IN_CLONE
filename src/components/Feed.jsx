import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from "./InputOptions";
import PhotoIcon from '@material-ui/icons/Photo';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase"


const Feed = () => {

    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map(doc => (
                {
                    id:doc.id,
                    data:doc.data(),
                }
            )))
        )   
    }, [])

   
    const sendPost =(e)=>{
        e.preventDefault();

        db.collection("posts").add({
            name: "atif",
            description:"test",
            message: input,
            photoUrl : "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
     
    }


	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input onChange={(e)=>setInput(e.target.value)}  value={input} type="text" />
						<button  onClick={sendPost} type="submit">
							send
						</button>
					</form>
				</div>
                <div className="feed__inputOptions">
                    {/* input options */}
                        <InputOptions
                        title="Photo"
                        Icon={PhotoIcon}
                        color="#7085f9"
                        />
                        <InputOptions
                        title="Video"
                        Icon={SubscriptionsIcon}
                        color="#e7a33e"
                        />
                        <InputOptions
                        title="Event"
                        Icon={EventNoteIcon}
                        color="#c0cbcd"
                        />
                        <InputOptions
                        title="Write Article"
                        Icon={CalendarViewDayIcon}
                        color="#7fc1se"
                        />

                </div>
			</div>

            {/* Posts */}
            {
               posts.map(({id,data:{name,description,message,photoUrl}})=>{
                   return  <Post 
                   key={id}
                   
            name={name}
            description={description}
            message = {message}
            photoUrl={photoUrl}
                   
                   />
                })
            }
            
		</div>
	);
};

export default Feed;

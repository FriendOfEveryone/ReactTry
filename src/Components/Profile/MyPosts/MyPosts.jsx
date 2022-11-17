import React from "react";
import MP from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={MP.posts}>
                <Post message = "Hi! How are you?" likecount = "14"/>
                <Post message = "It's my first post" likecount = "3"/>
                <Post message = "OHOHOH" likecount = "6"/>
            </div>
        </div>
    );
}

export default MyPosts;
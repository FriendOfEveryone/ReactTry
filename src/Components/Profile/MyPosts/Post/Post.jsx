import React from "react";
import P from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={P.item}>
            <img src="https://avatars.mds.yandex.net/i?id=d9fb15ca451a17a380e2ee9fa9c0d7fb-4986500-images-thumbs&n=13" />
            <span>{props.message}</span>
            <div>
                <span>likes {props.likecount}</span>
            </div>
        </div>
    );
}

export default Post;
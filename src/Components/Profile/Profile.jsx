import React from "react";
import P from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={P.content}>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=49d294f235a495e954bf0d85aecef5c5-4078450-images-thumbs&n=13"></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
import React from "react";
import styles from "@/styles/css/profile.module.css";

const PostSm = () => {
    return (
        <div>
            <video controls className={`${styles.video} bg-dark mt-3 mb-2`}>
                <source src='/livmu.mp4' type='video/mp4' />
            </video>
            <div className={`${styles.caption} text-dark`}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default PostSm;

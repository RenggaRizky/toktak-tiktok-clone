import React from "react";
import styles from "@/styles/css/profile.module.css";

const PostSm = () => {
    return (
        <div className={[styles.videoWrapper, "col-sm-6 col-md-4 col-lg-3 col-xxl-2"].join(" ")}>
            <video controls className={`${styles.video} bg-dark mb-1`}>
                <source src='/livmu.mp4' type='video/mp4' />
            </video>
            <div className={`${styles.caption} text-dark`}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default PostSm;

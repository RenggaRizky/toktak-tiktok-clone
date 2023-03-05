import { useRef, useEffect } from "react";
import Account from "./Account";
import styles from "@/styles/css/maincontent.module.css";
import VideoJS from "./VideoJS";
import videojs from "video.js";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";

const PostMd = () => {
    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
            {
                // src: "https://drive.google.com/file/d/1e9bUaoWAGFy6mcRtIB2mLziEY8p-uQta/view?usp=share_link",
                // src: "https://d2zihajmogu5jn.cloudfront.net/4k-hls/out.m3u8",
                src: "",
                type: "application/x-mpegurl",
            },
        ],
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on("waiting", () => videojs.log("player is waiting"));
        player.on("dispose", () => videojs.log("player will dispose"));
    };

    return (
        <section>
            <Account url='/' name='Rengga Rizky Septian' img='/account.png' height={38} width={38} hide={false} nameStyle={styles.name} usernameStyle={styles.username} />
            <p className={`${styles.caption} d-inline`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, dolores!</p>
            <p className={`${styles.topic} text-dark d-inline`}>komedi</p>
            <div className={`${styles.content} mt-3 row`}>
                <div className='col-9'>
                    <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                </div>
                <div className='col-3 align-items-end '>
                    <button className='btn rounded-circle btn-primary mb-2'>
                        <AiTwotoneHeart className='fs-6' />
                    </button>
                    <button className='btn rounded-circle btn-primary'>
                        <BsFillChatDotsFill className='fs-6' />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PostMd;

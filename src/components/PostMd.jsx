import { useRef, useEffect } from "react";
import Account from "./Account";
import styles from "@/styles/css/maincontent.module.css";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";

const PostMd = () => {
    const playerRef = useRef(null);

    return (
        <section>
            <Account url='/' name='Rengga Rizky Septian' img='/account.png' height={38} width={38} hide={false} nameStyle={styles.name} usernameStyle={styles.username} />
            <p className={`${styles.caption} d-inline`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, dolores!</p>
            <p className={`${styles.topic} text-dark d-inline`}>komedi</p>
            <div className={`${styles.content} mt-3 row gx-3`}>
                <div className='col-9'>
                    <video width='100%' height='400' controls className='rounded-4 bg-dark'>
                        <source src='/livmu.mp4' type='video/mp4' />
                    </video>
                </div>
                <div className='col-3 d-flex flex-column justify-content-end'>
                    <div className='text-center w-75'>
                        <button className='btn rounded-circle  btn-secondary'>
                            <AiTwotoneHeart className='fs-5' />
                        </button>
                        <p className='fw-bolder mt-2 text-dark text-center ' style={{ fontSize: "11px" }}>
                            100
                        </p>
                    </div>

                    <div className='text-center w-75'>
                        <button className='btn rounded-circle btn-secondary'>
                            <BsFillChatDotsFill className='fs-5' />
                        </button>
                        <p className='fw-bolder mt-2 text-dark text-center ' style={{ fontSize: "11px" }}>
                            100
                        </p>
                    </div>
                </div>
            </div>

            <hr className='mb-4' />
        </section>
    );
};

export default PostMd;

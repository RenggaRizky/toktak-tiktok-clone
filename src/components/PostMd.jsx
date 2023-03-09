import Account from "./Account";
import styles from "@/styles/css/maincontent.module.css";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";

const PostMd = () => {
    return (
        <section className={styles.content}>
            <div className={styles.accountWrapper}>
                <Account url='/' name='Rengga Rizky Septian' img='/account.png' height={38} width={38} hide={false} nameStyle={styles.name} usernameStyle={styles.username} />
            </div>
            <div className='d-inline d-md-block'>
                <p className={styles.caption}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, dolores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, dolores! <span className={`${styles.topic} text-dark `}>komedi</span>
                </p>
            </div>
            <div className='mt-3 d-flex column-gap-3 justify-content-start align-items-end  column-gap-sm-4'>
                <div className=''>
                    <video controls className={`${styles.video} rounded-4 bg-dark`}>
                        <source src='/livmu.mp4' type='video/mp4' />
                    </video>
                </div>
                <div className='d-none d-sm-flex flex-column justify-content-center'>
                    <div className=' '>
                        <button className='btn rounded-circle  btn-secondary'>
                            <AiTwotoneHeart className='fs-5' />
                        </button>
                        <p className='fw-bolder mt-2 text-dark text-center ' style={{ fontSize: "11px" }}>
                            100
                        </p>
                    </div>

                    <div className=' '>
                        <button className='btn rounded-circle btn-secondary'>
                            <BsFillChatDotsFill className='fs-5' />
                        </button>
                        <p className='fw-bolder mt-2 text-dark text-center ' style={{ fontSize: "11px" }}>
                            100
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostMd;

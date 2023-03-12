import { useState } from "react";
import Account from "./Account";
import styles from "@/styles/css/profile.module.css";
import PostSm from "./PostSm";

const NoLikedVideoYet = () => {
    return (
        <div className='text-center '>
            <p className='text-dark fw-bold text-capitalize fs-5 mt-5 mb-2 mb-sm-1'>belum ada video yang anda sukai</p>
            <p className='fs-6 fw-light'>Video yang anda sukai akan muncul disini</p>
        </div>
    );
};

// const NoVideoYet = () => {
//     <>
//         <h3></h3>
//         <p></p>
//     </>;
// };

const Profile = () => {
    const [showVideos, setShowVideos] = useState(true);
    const videos = showVideos ? `${styles.radioTabsActive} text-dark pb-2 border-bottom border-dark border-1 px-4` : `${styles.radioTabs} text-link pb-2 px-2`;
    const liked = !showVideos ? `${styles.radioTabsActive} text-dark pb-2 border-bottom border-dark border-1 px-4` : `${styles.radioTabs} text-link pb-2 px-2`;

    let videosCount = [];
    for (let i = 0; i < 10; i++) {
        videosCount.push(<PostSm />);
    }

    return (
        <>
            <div className='mb-5'>
                <Account url='/' name='Rengga Rizky Septian' img='/account.png' height={64} width={64} hide={false} isProfile={true} nameStyle={styles.name} usernameStyle={styles.username} />
            </div>
            <form className='d-flex column-gap-2 column-gap-sm-4 column-gap-md-5 border-link border-bottom mb-4'>
                <label htmlFor='videos' className={videos} onClick={() => setShowVideos(true)}>
                    <input type='radio' name='tabs' id='videos' defaultChecked />
                    Video
                </label>
                <label htmlFor='liked' className={liked} onClick={() => setShowVideos(false)}>
                    <input type='radio' name='tabs' id='liked' />
                    Disukai
                </label>
            </form>
            <div className='row gx-3'>{showVideos ? videosCount : <NoLikedVideoYet />}</div>
        </>
    );
};
export default Profile;

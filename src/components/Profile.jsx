import Account from "./Account";
import styles from "@/styles/css/profile.module.css";
import PostSm from "./PostSm";

const Profile = () => {
    return (
        <>
            <div className='mb-5'>
                <Account url='/' name='Rengga Rizky Septian' img='/account.png' height={64} width={64} hide={false} isProfile={true} nameStyle={styles.name} usernameStyle={styles.username} />
            </div>

            <form className='d-flex column-gap-5 border-link border-bottom pb-2'>
                <label htmlFor='videos' className={`${styles.radioTabs} text-dark`}>
                    <input type='radio' name='tabs' id='videos' />
                    Video
                </label>
                <label htmlFor='liked' className={`${styles.radioTabs} text-dark`}>
                    <input type='radio' name='tabs' id='liked' />
                    Disukai
                </label>
            </form>

            <div>
                <PostSm />
                <PostSm />
                <PostSm />
            </div>
        </>
    );
};
export default Profile;

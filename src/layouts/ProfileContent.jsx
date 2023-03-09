import styles from "@/styles/css/profile.module.css";

const ProfileContent = ({ children }) => {
    return (
        <section className='bg-light w-100 row gx-0'>
            <div className='col-2 col-sm-1 col-lg-3'></div>
            <div className={`${styles.profileWrapper} col-10 col-sm-11 col-lg-9`}>{children}</div>
        </section>
    );
};

export default ProfileContent;

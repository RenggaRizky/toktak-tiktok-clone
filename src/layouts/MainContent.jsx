import styles from "@/styles/css/maincontent.module.css";

const MainContent = ({ children }) => {
    return (
        <section className='bg-light w-100 row gx-0'>
            <div className='col-2 col-md-1 col-lg-3 col-xl-4'></div>
            <div className={`${styles.videoWrapper} col-10 col-md-11 offset-md-2 col-lg-9 offset-lg-3 col-xl-8 offset-xl-4`}>{children}</div>
        </section>
    );
};

export default MainContent;

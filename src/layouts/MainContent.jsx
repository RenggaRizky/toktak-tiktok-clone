import styles from "@/styles/css/maincontent.module.css";

const MainContent = ({ children }) => {
    return (
        <section className={`${styles.mainContent} bg-light w-100 row`}>
            <div className='col-2 col-sm-3 '></div>
            <div className={`${styles.videoWrapper} col-10 col-sm-9`}>
                <div className='mx-auto d-block'>{children}</div>
            </div>
        </section>
    );
};

export default MainContent;

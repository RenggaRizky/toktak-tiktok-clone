import styles from "@/styles/css/maincontent.module.css";

const MainContent = ({ children }) => {
    return (
        <section className={`${styles.mainContent} bg-light w-100 row`}>
            <div className='col-2 bg-info'></div>
            <div className={`${styles.videoWrapper} col-10`}>
                <div className='mx-auto d-block'>{children}</div>
            </div>
        </section>
    );
};

export default MainContent;

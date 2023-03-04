import styles from "@/styles/css/maincontent.module.css";

const MainContent = ({ children }) => {
    return (
        <section className={`${styles.mainContent} bg-light w-100 row`}>
            <div className='col-2'></div>
            <div className='col-10 p-5'>{children}</div>
        </section>
    );
};

export default MainContent;

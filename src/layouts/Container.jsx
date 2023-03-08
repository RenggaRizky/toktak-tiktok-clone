import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Container = ({ children, classMain }) => {
    return (
        <>
            <header className='border-bottom-5 border-secondary'>
                <Navbar />
            </header>

            <main className={classMain}>
                <Sidebar />
                {children}
            </main>
        </>
    );
};

export default Container;

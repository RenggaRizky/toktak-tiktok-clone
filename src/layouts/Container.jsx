import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Container = ({ child }) => {
    return (
        <>
            <header className='border-bottom-5 border-secondary'>
                <Navbar />
            </header>

            <main className='container-lg gx-0 gx-lg-4'>
                <Sidebar />
                {child}
            </main>
        </>
    );
};

export default Container;

import Navbar from "@/components/Navbar";

const ContainerNav = ({ children, classMain }) => {
    return (
        <>
            <header className='border-bottom-5 border-secondary'>
                <Navbar />
            </header>
            <main className={classMain}>{children}</main>
        </>
    );
};

export default ContainerNav;

import styles from "@/styles/css/sidebar.module.css";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const users = [
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
];

const Sidebar = () => {
    const suggestedAccount = users.map((user) => {
        return (
            <Link href='/' className='rouded-circle mb-3' key={user.name}>
                {/* <p>{user.name}</p> */}
                <Image src={user.profile} height={28} width={28} alt={user.name} />
            </Link>
        );
    });

    return (
        <aside className={`${styles.sidebar} bg-light border-end border-3 text-center py-4 text-lg-start border-lg-0`}>
            <div className={`${styles.menu} d-flex flex-column mb-4`}>
                <Link href='/'>
                    <AiFillHome className='fs-3 mb-3 mb-lg-0' />
                </Link>

                <Link href='/' className='d-lg-none'>
                    <AiOutlineSearch className='fs-3' />
                </Link>
            </div>

            <hr className='w-50 mx-auto my-0 border-1 text-gray border-gray d-lg-none' />
            <div className='lg-none w-75 my-0 border-bottom border-2 text-gray border-gray d-lg-inline-block'></div>

            <div className='d-flex flex-column mt-4'>{suggestedAccount}</div>

            <hr className='w-50 mx-auto my-0 border-1 text-gray border-gray' />
        </aside>
    );
};

export default Sidebar;

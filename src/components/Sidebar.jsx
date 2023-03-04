import styles from "@/styles/css/sidebar.module.css";
import { AiFillCar, AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdComputer, MdOutlineTheaterComedy, MdSportsBasketball } from "react-icons/md";
import { IoIosSchool, IoLogoGameControllerA, IoMdMusicalNotes } from "react-icons/io";
import { HiOutlineFilm } from "react-icons/hi";
import { GiCat, GiClothes } from "react-icons/gi";
import { FaBlogger, FaLaughSquint, FaRegNewspaper } from "react-icons/fa";
import { TbRoad } from "react-icons/tb";
import Link from "next/link";
import Account from "./Account";

const users = [
    { name: "Adam", profile: "/account.png" },
    { name: "Adam ", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
    { name: "Adam", profile: "/account.png" },
];

// prettier-ignore
const topics = [
    { name: "Kendaraan", content: <><AiFillCar /></> },
    { name: "Komedi", content: <><MdOutlineTheaterComedy /></> },
    { name: "Pendidikan", content: <><IoIosSchool /></> },
    { name: "Hiburan", content: <><FaLaughSquint/></> },
    { name: "Film & Animasi", content: <><HiOutlineFilm/></> },
    { name: "Game", content: <><IoLogoGameControllerA /></> },
    { name: "Gaya", content: <><GiClothes /></> },
    { name: "Musik", content: <><IoMdMusicalNotes /></> },
    { name: "Berita & Politik", content: <><FaRegNewspaper /></> },
    { name: "Blog", content: <><FaBlogger /></> },
    { name: "Hewan", content: <><GiCat/></> },
    { name: "Olahraga", content: <><MdSportsBasketball /></> },
    { name: "Sains & Teknologi", content: <><MdComputer/></> },
    { name: "Perjalanan & Acara", content: <><TbRoad /></> },
];

const suggestedAccount = users.map((user) => {
    return <Account key={user.name} url='/' name={user.name} img={user.profile} height={32} width={32} nameStyle={styles.name} usernameStyle={styles.username} />;
});

const discover = topics.map((topic) => {
    return (
        <Link href='/' key={topic.name} className='m-1 '>
            <button className={`${styles.topicContent} d-flex align-items-center text-dark btn btn-light border-secondary border-2 rounded-pill py-2`}>
                {topic.content} <p className={`${styles.topicName} mb-0 ms-3 d-none d-lg-inline-block`}>{topic.name}</p>
            </button>
        </Link>
    );
});

const Sidebar = () => {
    return (
        <aside className={`${styles.sidebar} bg-light border-end border-3 text-center py-4 text-lg-start overflow-y-scroll position-fixed top-0 left-0`}>
            <div className={`${styles.menu} d-flex flex-column mb-4`}>
                <Link href='/' className='d-lg-flex align-items-center'>
                    <AiFillHome className='fs-3 mb-3 mb-lg-0' />
                    <p className={["fw-bold fs-6 my-0 ms-0 d-none ms-lg-3 d-lg-inline-block"].join(" ")}>Untuk Anda</p>
                </Link>

                <Link href='/' className='d-lg-none'>
                    <AiOutlineSearch className='fs-3' />
                </Link>
            </div>

            <hr className={styles.divider} />

            <div>
                <p className={`${styles.subtitle} d-none d-lg-inline-block mt-lg-4  mb-lg-3`}>Saran Akun</p>
                <div className='d-flex flex-column mt-4 mt-lg-0'>{suggestedAccount}</div>
            </div>

            <hr className={styles.divider} />

            <div className='mb-3 mt-3 mt-lg-0'>
                <p className={`${styles.subtitle} d-none d-lg-inline-block mt-lg-4  mb-lg-3`}>Temukan</p>
                <div className='d-flex flex-wrap justify-content-center justify-content-lg-start'>{discover}</div>
            </div>

            <hr className={styles.divider} />

            {/* prettier-ignore */}
            <div className="my-4 d-none d-lg-inline-block ">
                <ul className={`${styles.footerMenu} d-flex flex-wrap text-link list-unstyled`}>
                    <li><Link href="" className="me-2">Tentang Kami</Link></li>
                    <li><Link href="" className="me-2">Ruang Berita</Link></li>
                    <li><Link href="" className="me-2">Kontak</Link></li>
                    <li><Link href="" className="me-2">Karier</Link></li>
                </ul>

                <ul className={`${styles.footerMenu} d-flex flex-wrap text-link list-unstyled`}>
                    <li><Link href="" className="me-2">TokTak for Good</Link></li>
                    <li><Link href="" className="me-2">Iklan</Link></li>
                    <li><Link href="" className="me-2">Developers</Link></li>
                    <li><Link href="" className="me-2">TokTak Rewards</Link></li>
                    <li><Link href="" className="me-2">TokTak Browse</Link></li>
                    <li><Link href="" className="me-2">TokTak Embeds</Link></li>
                </ul>

                <ul className={`${styles.footerMenu} d-flex flex-wrap text-link list-unstyled`}>
                    <li><Link href="" className="me-2">Bantuan</Link></li>
                    <li><Link href="" className="me-2">Keamanan</Link></li>
                    <li><Link href="" className="me-2">Ketentuan</Link></li>
                    <li><Link href="" className="me-2">Privasi</Link></li>
                    <li><Link href="" className="me-2">Portal Kreator</Link></li>
                    <li><Link href="" className="me-2">Halaman Kebijakan</Link></li>
                    <li><Link href="" className="me-2">Lainnya</Link></li>
                </ul>
            </div>

            <hr className={`${styles.divider} d-none d-lg-inline-block`} />

            <footer className={`${styles.footerMenu} d-none d-lg-inline-block text-center my-4 text-link`}>© 2023 TokTak</footer>
        </aside>
    );
};

export default Sidebar;

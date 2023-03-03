import Image from "next/image";
import styles from "@/styles/css/search.module.css";
import { AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg py-3 w-100 position-fixed top-0 start-0 z-3'>
            <div className='container-lg'>
                <a className='navbar-brand' href='#'>
                    <Image src='/toktak.png' width={48} height={48} alt='TokTak Logo' />
                </a>

                <form className={`${styles.form} offset-md-2 offset-lg-1`} role='search'>
                    <div className={styles.group}>
                        <svg className={styles.icon} aria-hidden='true' viewBox='0 0 24 24'>
                            <g>
                                <path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
                            </g>
                        </svg>
                        <input placeholder='Cari Akun' type='search' className={styles.input} />
                    </div>
                </form>

                <div className='' id='navbarNavAltMarkup'>
                    <div className='navbar-nav d-flex gap-3 flex-row'>
                        <button className='btn btn-light border-secondary border-2 rounded-2 text-dark px-4 py-2 fw-bold fs-6 align-items-center gap-2 d-none d-sm-flex' type='submit'>
                            <AiOutlinePlus className='fw-bold fs-6' />
                            <p className='m-0'>Unggah</p>
                        </button>
                        <button className='btn btn-primary rounded-2 text-white text-white px-4 py-2 fw-bold fs-6' type='submit'>
                            Masuk
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

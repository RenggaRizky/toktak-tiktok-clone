import Image from "next/image";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";

const Account = ({ url, name, img, height, width, nameStyle, usernameStyle, hide = true }) => {
    return (
        <>
            <Link href={url} className='rouded-circle mb-3 d-lg-flex align-items-center'>
                <Image src={img} height={height} width={width} alt={name} />
                <div className={[hide ? "d-none d-lg-inline-block " : " ", "ms-lg-3"].join(" ")}>
                    <div className='d-lg-flex align-items-center'>
                        <p className={`${nameStyle} fw-bold text-dark mb-0`}>{name}</p>
                        <AiFillCheckCircle className='text-verified ms-lg-2' />
                    </div>
                    <p className={`${usernameStyle} mb-0 text-gray`}>{name}</p>
                </div>
            </Link>
        </>
    );
};

export default Account;
